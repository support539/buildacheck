"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  category: string;
  items: FaqItem[];
}

export default function FaqAccordion({ sections }: { sections: FaqSection[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section.category}>
          <h2 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-copper-500">
            {section.category}
          </h2>
          <div className="divide-y divide-cream-200 border-t border-cream-200">
            {section.items.map((item) => {
              const id = `${section.category}-${item.question}`;
              const isOpen = openId === id;
              return (
                <div key={id}>
                  <button
                    onClick={() => toggle(id)}
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 font-display text-[0.938rem] font-bold text-slate-900 sm:text-base">
                      {item.question}
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-copper-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="pb-5 text-[0.938rem] leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
