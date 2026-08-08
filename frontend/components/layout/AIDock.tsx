"use client";

import {
  MessageCircle,
  FileText,
  Building2,
  Info,
  Scale,
  Settings,
  Plus,
} from "lucide-react";

interface Props {
  active: string;
  onChange: (page: string) => void;
  onNewChat: () => void;
}

const menu = [
  {
    id: "chat",
    icon: MessageCircle,
    label: "AI Chat",
  },
  {
    id: "complaint",
    icon: FileText,
    label: "Complaint",
  },
  {
    id: "forum",
    icon: Building2,
    label: "Forum Finder",
  },
  {
    id: "about",
    icon: Info,
    label: "About",
  },
];

export default function AIDock({
  active,
  onChange,
  onNewChat,
}: Props) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-24 z-50 flex items-center">

      <div className="h-[96vh] w-20 ml-2 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col">

        {/* ---------- Logo ---------- */}

        <div className="h-28 flex items-center justify-center">

          <button
            onClick={() => onChange("chat")}
            className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <Scale className="mx-auto text-slate-700" size={26} />
          </button>

        </div>

        {/* ---------- Menu ---------- */}

        <div className="flex-1 flex flex-col justify-center items-center gap-5">

          {menu.map((item) => {

            const Icon = item.icon;

            const selected = active === item.id;

            return (

              <button
                key={item.id}
                onClick={() => onChange(item.id)}
                className={`
                  group
                  relative

                  w-12
                  h-12

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300

                  border

                  ${
                  selected
                  ? `
                  bg-blue-50
                  border-blue-200
                  text-blue-600
                  shadow-md
                  scale-105
                  `
                  : `
                  border-transparent
                  text-slate-500
                  hover:bg-slate-100
                  hover:text-blue-600
                  hover:scale-105
                  `
                  }
                  `}
              >

                {/* Active Indicator */}

                {selected && (
                  <div className="absolute -left-4 w-1 h-8 rounded-full bg-blue-600" />
                )}

                <Icon size={22} />

                {/* Tooltip */}

                <span
                  className="
                    absolute
                    left-16
                    px-3
                    py-2
                    rounded-lg
                    bg-slate-900
                    text-white
                    text-sm
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition
                    pointer-events-none
                  "
                >
                  {item.label}
                </span>

              </button>

            );

          })}

        </div>

        {/* ---------- Settings ---------- */}

        <div className="mt-auto mb-6 flex flex-col items-center gap-3">

          {/* New Chat */}

          <button
            onClick={onNewChat}
            className="
              w-12
              h-12

              rounded-xl

              flex
              items-center
              justify-center

              text-slate-500

              transition-all
              duration-300

              hover:bg-blue-100
              hover:text-blue-600
              hover:scale-105

              active:scale-95
            "
            title="New Chat"
          >
            <Plus size={22} />
          </button>

          {/* Settings */}

          <button
            className="
              w-12
              h-12

              rounded-xl

              flex
              items-center
              justify-center

              text-slate-500

              transition-all
              duration-300

              hover:bg-blue-100
              hover:text-blue-600
              hover:scale-105

              active:scale-95
            "
            title="Settings"
          >
            <Settings size={22} />
          </button>

        </div>

      </div>

    </aside>
  );
}