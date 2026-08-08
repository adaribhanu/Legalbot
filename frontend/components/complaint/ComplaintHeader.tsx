"use client";

import { FileText } from "lucide-react";

export default function ComplaintHeader() {
  return (
    <div className="border-b border-slate-200 pb-6">

      <div className="flex items-center gap-4">

        <div
          className="
          flex

          h-14
          w-14

          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-blue-600
          to-indigo-600

          text-white

          shadow-lg
          "
        >
          <FileText size={28} />
        </div>

        <div>

          <h1
            className="
            text-3xl

            font-bold

            text-slate-800
            "
          >
            Complaint Generator
          </h1>

          <p
            className="
            mt-1

            text-slate-500
            "
          >
            Generate professionally formatted consumer complaints using AI.
          </p>

        </div>

      </div>

    </div>
  );
}