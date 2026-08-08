"use client";

import { useState } from "react";

import ForumForm from "./ForumForm";
import ForumResult from "./ForumResult";

import {
  findForum,
  ForumRequest,
  ForumResponse,
} from "@/services/forumService";

export default function ForumWorkspace() {

  const [formData, setFormData] =
    useState<ForumRequest>({
      state: "",
      district: "",
      claim_amount: 0,
    });

  const [result, setResult] =
    useState<ForumResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function handleSearch() {

    setLoading(true);

    try {

      const response =
        await findForum(formData);

      setResult(response);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="flex h-screen flex-col p-8">

      <h1 className="text-4xl font-bold text-slate-800">
        Forum Finder
      </h1>

      <p className="mt-2 text-slate-500">
        Find the correct Consumer Commission.
      </p>

      <div
        className="
        mt-8

        grid

        flex-1

        grid-cols-2

        gap-8
        "
      >

        <div
          className="
          rounded-3xl

          border

          border-slate-200

          bg-white

          p-8
          "
        >

          <ForumForm
            formData={formData}
            setFormData={setFormData}
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="
            mt-8

            w-full

            rounded-2xl

            bg-blue-600

            py-4

            text-lg

            font-semibold

            text-white

            hover:bg-blue-700
            "
          >
            {loading
              ? "Finding..."
              : "🏛 Find Forum"}
          </button>

        </div>

        <ForumResult
          result={result}
        />

      </div>

    </div>

  );

}