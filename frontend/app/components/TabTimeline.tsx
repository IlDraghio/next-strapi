"use client";
import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function TabTimeline({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tab-timeline-container">
      <div className="tab-timeline-buttons-container">
        <div className="dashes"></div>
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index; 

          return (
            <div key={index} className="tab-timeline-button-wrapper">
              <button
                className={`tab-timeline-button ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
              <div
                className={`tab-timeline-button-label ${isActive ? "active-label" : ""}`}
              >
                {tab.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="tab-timeline-content">{tabs[activeIndex].content}</div>
    </div>
  );
}
