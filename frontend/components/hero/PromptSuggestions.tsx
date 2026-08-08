"use client";

const prompts = [
  {
    icon: "🛒",
    text: "Refund Denied",
  },
  {
    icon: "📦",
    text: "Wrong Product",
  },
  {
    icon: "⚖️",
    text: "Consumer Rights",
  },
  {
    icon: "📝",
    text: "Complaint Letter",
  },
  {
    icon: "🚚",
    text: "Delivery Delay",
  },
  {
    icon: "💳",
    text: "Payment Failed",
  },
];

interface Props {
  onSelect: (text: string) => void;
}

export default function PromptSuggestions({
  onSelect,
}: Props) {
  return (
    <section className="w-full mt-10">

      <h3 className="mb-4 text-sm font-semibold tracking-wide text-slate-500 uppercase">
        Quick Prompts
      </h3>

      <div className="flex flex-wrap justify-center gap-3">

        {prompts.map((prompt) => (

          <button
            key={prompt.text}
            onClick={() => onSelect(prompt.text)}
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-slate-200

              bg-white/80
              backdrop-blur

              px-5
              py-3

              text-sm
              font-medium

              text-slate-700

              shadow-sm

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-blue-300
              hover:bg-blue-50
              hover:shadow-lg
            "
          >
            <span className="text-lg">
              {prompt.icon}
            </span>

            <span>
              {prompt.text}
            </span>

          </button>

        ))}

      </div>

    </section>
  );
}