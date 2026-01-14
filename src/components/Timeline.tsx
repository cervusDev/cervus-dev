export interface TimelineCard {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  footer: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface TimelineDay {
  id: string;
  dateLabel: string;
  cards: TimelineCard[];
}

export interface TimelineMonth {
  id: string;
  label: string;
  entries: number;
  days: TimelineDay[];
}

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
        {data.map((month) => (
          <TimelineMonth key={month.id} month={month} />
        ))}
      </div>
    </div>
  );
}

function TimelineMonth({ month }: { month: TimelineMonth }) {
  return (
    <>
      <div
        className="
          relative inline-block mb-[30px]
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
          className="
            absolute -top-px left-[calc(100%-10px)]
            -z-10 whitespace-nowrap
            py-1 pr-[10px] pl-5
            bg-[#111]
            border border-black
            rounded-tr-[40px] rounded-br-[40px]
            text-white
          "
        >
          {month.entries} Entries
        </span>
      </div>

      {month.days.map((day) => (
        <TimelineDay key={day.id} day={day} />
      ))}
    </>
  );
}

import { useState } from "react";

function TimelineDay({ day }: { day: TimelineDay }) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="
        relative block mb-[30px] pl-[35px]
        before:absolute
        before:content-['']
        before:w-[30px]
        before:h-px
        before:bg-[#444950]
        before:top-3
        before:left-5
        after:absolute
        after:content-['']
        after:w-[10px]
        after:h-[10px]
        after:top-[7px]
        after:left-[11px]
        after:rounded-full
        after:border after:border-[#17191B]
        after:bg-[linear-gradient(to_bottom,rgba(138,145,150,1)_0%,rgba(122,130,136,1)_60%,rgba(112,120,125,1)_100%)]
      "
    >
      {/* Date toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="
          inline-flex items-center gap-2 mb-[15px]
          px-[15px] py-[2px]
          rounded-[20px]
          border border-[#17191B]
          text-white
          shadow-[1px_1px_1px_rgba(0,0,0,0.3)]
          bg-[linear-gradient(#74cae3,#5bc0de_60%,#4ab9db)]
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

      {/* Cards */}
      <div
        className={`
          grid transition-all duration-300
          ${open ? "grid-cols-1 md:grid-cols-3 gap-4 max-h-[3000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        {day.cards.map((card) => (
          <TimelineCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function TimelineCard({ card }: { card: TimelineCard }) {
  return (
    <div
      className="
        relative overflow-hidden
        bg-[#444950]
        border border-[#17191B]
        rounded-[15px]
        rounded-tl-none rounded-br-none
      "
    >
      <div className="px-[15px] py-[5px] border-b border-[#17191B] text-white">
        <i className={`fa ${card.icon} ${card.iconColor} mr-1`} />
        {card.title}
      </div>

      <div className="px-[15px] py-[5px] bg-[#17191B] text-sm">
        {card.items.map((item, i) => (
          <div key={i} className="mb-[5px]">
            <strong className="italic text-[#666] mr-1">{item.label}</strong>:
            {item.value}
          </div>
        ))}
      </div>

      <div className="px-[15px] py-[5px] border-t border-[#17191B] text-right italic text-white">
        {card.footer}
      </div>
    </div>
  );
}
