"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

import ComplaintHeader from "./ComplaintHeader";
import ComplaintForm from "./ComplaintForm";
import ComplaintPreview from "./ComplaintPreview";

import {
  generateComplaint,
  ComplaintRequest,
} from "@/services/complaintService";

import { extractCase } from "@/services/extractService";

import { ChatMessage } from "../chat/ChatWorkspace";

interface ComplaintWorkspaceProps {
  messages: ChatMessage[];
}

export default function ComplaintWorkspace({
  messages,
}: ComplaintWorkspaceProps) {
  const [formData, setFormData] =
    useState<ComplaintRequest>({
      consumer_name: "",
      email: "",
      phone: "",
      seller: "",
      product: "",
      issue: "",
      facts: "",
      relief: "",
    });

  const [complaint, setComplaint] =
    useState("");

  const [importLoading, setImportLoading] =
    useState(false);

  const [generateLoading, setGenerateLoading] =
    useState(false);

  const previewRef =
    useRef<HTMLDivElement>(null);

  // -----------------------------
  // Import From Chat
  // -----------------------------

  async function importFromChat() {

    if (messages.length === 0) {

      toast.error(
        "No chat conversation found."
      );

      return;

    }

    try {

      setImportLoading(true);

      const conversation = messages
        .map(
          (message) =>
            `${message.role.toUpperCase()}: ${message.content}`
        )
        .join("\n\n");

      const extracted =
        await extractCase(conversation);

      setFormData((prev) => ({
        ...prev,

        consumer_name:
          extracted.consumer_name,

        seller:
          extracted.seller,

        product:
          extracted.product,

        issue:
          extracted.issue,

        facts:
          extracted.facts,

        relief:
          extracted.relief,
      }));

      toast.success(
        "Chat imported successfully."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to import chat."
      );

    } finally {

      setImportLoading(false);

    }

  }

  // -----------------------------
  // Generate Complaint
  // -----------------------------

  async function handleGenerateComplaint() {

    setGenerateLoading(true);

    try {

      const response =
        await generateComplaint(formData);

      setComplaint(response.complaint);

      toast.success(
        "Complaint generated successfully."
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to generate complaint."
      );

    } finally {

      setGenerateLoading(false);

    }

  }

  // -----------------------------
  // Download PDF
  // -----------------------------

  async function downloadPDF() {

    if (!previewRef.current) return;

    const canvas =
      await html2canvas(previewRef.current, {
        scale: 2,
      });

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF("p", "mm", "a4");

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("Consumer_Complaint.pdf");

    toast.success(
      "PDF downloaded successfully."
    );

  }

  return (

    <div className="flex h-screen flex-col p-8">

      <ComplaintHeader />

      <div className="mt-8 grid flex-1 grid-cols-2 gap-8 overflow-hidden">

        {/* LEFT */}

        <div className="overflow-y-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <button
            onClick={importFromChat}
            disabled={importLoading}
            className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:bg-slate-400"
          >
            {importLoading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Importing...
              </>
            ) : (
              <>
                ✨ Import From Chat
              </>
            )}
          </button>

          <ComplaintForm
            formData={formData}
            setFormData={setFormData}
          />

          <button
            onClick={handleGenerateComplaint}
            disabled={generateLoading}
            className="mt-8 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:bg-slate-400"
          >
            {generateLoading ? (
              <div className="flex items-center gap-2">
                <Loader2
                  size={20}
                  className="animate-spin"
                />
                Generating...
              </div>
            ) : (
              "✨ Generate Complaint"
            )}
          </button>

          <button
            onClick={downloadPDF}
            disabled={!complaint}
            className="mt-4 w-full rounded-2xl border-2 border-blue-600 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50 disabled:border-slate-300 disabled:text-slate-400"
          >
            📥 Download PDF
          </button>

        </div>

        {/* RIGHT */}

        <ComplaintPreview
          complaint={complaint}
          previewRef={previewRef}
        />

      </div>

    </div>

  );

}