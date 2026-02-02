import type {
  TimelineMonth,
  TimelineDay,
  TimelineCard,
} from "@/constants/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <p className="ml-2 text-xs text-neutral-400 italic">
          {month?.promotion}
        </p>
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
        <UnavailableProjectModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}


function UnavailableProjectModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#17191B] text-white rounded-lg p-6 max-w-md w-full shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-semibold mb-3">
            Projeto indisponível
          </h2>

          <p className="text-sm text-gray-300 mb-6">
            Este projeto ainda não está disponível para acesso público.
          </p>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 transition"
            >
              Entendi
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
    bg-[#444950]
    border border-[#17191B]
    rounded-[15px]
    rounded-tl-none rounded-br-none
    flex flex-col
    h-full
    cursor-pointer

    transition-all duration-200 ease-out
    hover:scale-[1.02]
    hover:border-[#2F80ED]
    hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]
  "
    >
      <div className="px-[15px] py-[5px] border-b border-[#17191B] text-white">
        <i className={`fa ${card.icon} ${card.iconColor} mr-1`} />
        {card.title}
      </div>

      <div className="px-[15px] py-[5px] bg-[#17191B] text-sm flex-1">
        {card.items.map((item, i) => (
          <div key={i} className="mb-[5px]">
            <strong className="italic text-[#666] mr-1">{item.label}</strong>:
            {item.value}
          </div>
        ))}
      </div>

      <div
        className="
  px-[15px] py-[5px]
  h-[40px]
  flex items-center justify-end
  border-t border-[#17191B]
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
