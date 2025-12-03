"use client";
import { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function TabSimple({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);
  
  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs[active].content}
      </div>
    </div>
  );
}