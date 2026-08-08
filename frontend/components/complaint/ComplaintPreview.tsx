"use client";

import { FileText } from "lucide-react";

import { RefObject } from "react";

interface ComplaintPreviewProps {
    complaint: string;
    previewRef: RefObject<HTMLDivElement | null>;
}

export default function ComplaintPreview({
    complaint,
    previewRef
}: ComplaintPreviewProps) {
  return (
    <div
      className="
      h-full

      rounded-3xl

      border
      border-slate-200

      bg-slate-100

      p-6

      shadow-inner
      "
    >
      <div className="mb-5 flex items-center gap-3">

        <div
          className="
          flex

          h-11
          w-11

          items-center
          justify-center

          rounded-xl

          bg-blue-600

          text-white
          "
        >
          <FileText size={20} />
        </div>

        <div>

          <h2 className="text-lg font-semibold text-slate-800">
            Live Preview
          </h2>

          <p className="text-sm text-slate-500">
            AI-generated complaint
          </p>

        </div>

      </div>

      {/* A4 Paper */}

      <div
        ref={previewRef}
        className="
        h-[700px]

        overflow-y-auto

        rounded-2xl

        bg-white

        p-10

        shadow-lg
        "
      >
        {complaint ? (

          <pre
            className="
            whitespace-pre-wrap

            break-words

            font-serif

            text-[15px]

            leading-8

            text-slate-700
            "
          >
            {complaint}
          </pre>

        ) : (

          <div
            className="
            flex

            h-full

            flex-col

            items-center

            justify-center

            text-center
            "
          >
            <FileText
              size={70}
              className="mb-6 text-slate-300"
            />

            <h3
              className="
              text-xl

              font-semibold

              text-slate-700
              "
            >
              Complaint Preview
            </h3>

            <p
              className="
              mt-3

              max-w-sm

              leading-7

              text-slate-500
              "
            >
              Fill in the complaint details on the left and
              click <strong>Generate Complaint</strong>.
              The AI-generated legal complaint will appear
              here.
            </p>

          </div>

        )}
      </div>

    </div>
  );
}