"use client";

interface ForumResultProps {
  result: {
    forum: string;
    address: string;
    jurisdiction: string;
  } | null;
}

export default function ForumResult({
  result,
}: ForumResultProps) {

  if (!result) {

    return (

      <div
        className="
        flex

        h-full

        items-center

        justify-center

        rounded-3xl

        border

        border-dashed

        border-slate-300

        bg-white

        text-slate-400
        "
      >
        No forum selected.
      </div>

    );

  }

  return (

    <div
      className="
      rounded-3xl

      border

      border-slate-200

      bg-white

      p-8

      shadow-sm
      "
    >

      <h2 className="text-2xl font-bold text-slate-800">
        {result.forum}
      </h2>

      <div className="mt-6 space-y-4">

        <div>

          <p className="text-sm text-slate-500">
            Address
          </p>

          <p className="font-medium">
            {result.address}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-500">
            Jurisdiction
          </p>

          <p className="font-medium">
            {result.jurisdiction}
          </p>

        </div>

      </div>

    </div>

  );

}