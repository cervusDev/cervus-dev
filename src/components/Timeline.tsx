import type {
  TimelineMonth,
  TimelineDay,
  TimelineCard,
} from "@/constants/projects";
import { useState } from "react";
import { UnavailableProjectModal } from "./UnavailableProjectModal";

interface TimelineProps {
  data: TimelineMonth[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="container mx-auto px-4">
      <div
        className="
          relative mt-5
          before:absolute
          before:content-['']
          before:w-1
          before:h-[calc(100%+50px)]
          before:left-[14px]
          before:top-[5px]
          before:rounded
          before:bg-[linear-gradient(to_right,rgba(138,145,150,1)_0%,rgba(122,130,136,1)_60%,rgba(98,105,109,1)_100%)]
        "
      >
        {data.map((month, index) => (
          <TimelineMonth
            key={month.id}
            month={month}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineMonth({
  month,
  defaultOpen = false,
}: {
  month: TimelineMonth;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="
          relative inline-flex items-center gap-2 mb-[30px]
          py-1 pr-4 pl-[35px]
          bg-[#444950]
          rounded-[40px]
          border border-[#17191B]
          border-r-black
          text-white
          before:absolute
          before:content-['']
          before:w-5 before:h-5
          before:left-[5px]
          before:rounded-full
          before:border before:border-[#17191B]
          before:bg-[linear-gradient(to_bottom,rgba(138,145,150,1)_0%,rgba(122,130,136,1)_60%,rgba(112,120,125,1)_100%)]
        "
      >
        {month.label}
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`
          transition-all duration-300
          ${open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        {month.days.map((day, index) => (
          <TimelineDay
            key={day.id}
            day={day}
            defaultOpen={defaultOpen && index === 0}
          />
        ))}
      </div>
    </>
  );
}

function TimelineDay({
  day,
  defaultOpen = false,
}: {
  day: TimelineDay;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigation = (url?: string) => {
    if (!url) {
      setIsModalOpen(true);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative block mb-[30px] pl-[35px]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="
          inline-flex items-center gap-2 mb-[15px]
          px-[15px] py-[2px]
          rounded-[20px]
          border border-[#17191B]
          text-gray
          shadow-[1px_1px_1px_rgba(0,0,0,0.3)]
          bg-orange-500
        "
      >
        {day.dateLabel}
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`
          grid transition-all duration-300
          ${
            open
              ? "grid-cols-1 md:grid-cols-3 gap-4 max-h-[3000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }
        `}
      >
        {day.cards.map((card) => (
          <TimelineCard
            key={card.id}
            card={card}
            onNavigation={() => navigation(card.navigation?.url)}
          />
        ))}
      </div>

      {isModalOpen && (
        <UnavailableProjectModal
          onClose={() => setIsModalOpen(false)}
          message="Este projeto ainda não está disponível para acesso público."
        />
      )}
    </div>
  );
}

function TimelineCard({
  card,
  onNavigation,
}: {
  card: TimelineCard;
  onNavigation: () => void;
}) {
  return (
    <div
      onClick={onNavigation}
      className="
        group
        relative overflow-hidden
        cursor-pointer
        flex flex-col h-full

        rounded-[15px]
        rounded-tl-none rounded-br-none

        bg-white/2
        backdrop-blur-xl
        border border-white/20

        transition-all duration-200 ease-out
        hover:scale-[1.02]
        hover:border-[0_0_40px_rgba(249,115,22,0.15)]
        hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]
      "
    >
      {/* Reflexo de vidro */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-[15px]
          rounded-tl-none rounded-br-none
          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent
          opacity-40
        "
      />

      {/* Glow interno */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          rounded-[15px]
          rounded-tl-none rounded-br-none
          shadow-inner
          shadow-white/10
        "
      />

      {/* Header */}
      <div
        className="
        relative z-10
        px-[15px] py-[5px]
        border-b border-white/10
        text-white
      "
      >
        <i className={`fa ${card.icon} ${card.iconColor} mr-1`} />
        {card.title}
      </div>

      {/* Body */}
      <div
        className="
        relative z-10
        px-[15px] py-[5px]
        text-sm flex-1
        bg-black/30
      "
      >
        {card.items.map((item, i) => (
          <div key={i} className="mb-[5px]">
            <strong className="italic text-[#999] mr-1">{item.label}</strong>:
            <span className="text-gray-200 ml-1">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
          relative z-10
          px-[15px] py-[5px]
          h-[40px]
          flex items-center justify-end
          border-t border-white/10
          text-right italic text-white

          transition-colors duration-200
          group-hover:text-orange-400
        "
      >
        {card.footer}
      </div>
    </div>
  );
}
