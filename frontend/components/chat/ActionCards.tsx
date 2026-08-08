"use client";

import {
  FileText,
  MapPinned,
  Download,
} from "lucide-react";

interface Props {
  message: string;

  onGenerateComplaint: () => void;

  onFindForum: () => void;

  onExportPDF: () => void;
}

export default function ActionCards({
  message,
  onGenerateComplaint,
  onFindForum,
  onExportPDF,
}: Props) {
  const text = message.toLowerCase();

  const showComplaint =
    text.includes("complaint");

  const showForum =
    text.includes("consumer forum") ||
    text.includes("commission");

  const showPDF = showComplaint;

  return (
    <div className="mt-5 flex flex-wrap gap-3">

      {showComplaint && (
        <button
          onClick={onGenerateComplaint}
          className="
          flex
          items-center
          gap-2

          rounded-xl

          border

          border-slate-200

          bg-white

          px-4
          py-3

          text-sm
          font-medium

          shadow-sm

          transition

          hover:border-blue-500
          hover:bg-blue-50
          hover:text-blue-700
          "
        >
          <FileText size={18} />

          Generate Complaint
        </button>
      )}

      {showForum && (
        <button
          onClick={onFindForum}
          className="
          flex
          items-center
          gap-2

          rounded-xl

          border

          border-slate-200

          bg-white

          px-4
          py-3

          text-sm
          font-medium

          shadow-sm

          transition

          hover:border-blue-500
          hover:bg-blue-50
          hover:text-blue-700
          "
        >
          <MapPinned size={18} />

          Find Forum
        </button>
      )}

      {showPDF && (
        <button
          onClick={onExportPDF}
          className="
          flex
          items-center
          gap-2

          rounded-xl

          border

          border-slate-200

          bg-white

          px-4
          py-3

          text-sm
          font-medium

          shadow-sm

          transition

          hover:border-blue-500
          hover:bg-blue-50
          hover:text-blue-700
          "
        >
          <Download size={18} />

          Export PDF
        </button>
      )}

    </div>
  );
}