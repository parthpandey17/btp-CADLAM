import React from "react";
import { Square } from "lucide-react";

function TimelineItem({ icon, title, date, description, isLast }) {
  return (
    <div
      className={`relative flex items-start space-x-4 ${isLast ? "" : "mb-8"}`}
    >
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full ">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between space-x-4 text-sm">
          <h3 className="font-medium text-white">{title}</h3>
          <div className="text-right text-gray-400">{date}</div>
        </div>
        {description && (
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
}

export default function Component() {
  const timelineItems = [
    {
      icon: <Square className="h-4 w-4 text-yellow-500" />,
      title: "Last date for Paper Submission",
      date: "September 21, 2026, AoE",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Revision of submission",
      date: "September 23, 2026, AoE",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Notification of Acceptance",
      date: "November 13, 2026, AoE",
    },
    {
      icon: <Square className="h-4 w-4 text-gray-400" />,
      title: "Camera-ready Version",
      date: "November 27, 2026, AoE",
    },
  ];

  return (
    <div className=" overflow-hidden">
      <div className="relative">
        <div className="absolute bottom-8 left-6 top-8 w-0.5 bg-gray-700" />
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLast={index === timelineItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
