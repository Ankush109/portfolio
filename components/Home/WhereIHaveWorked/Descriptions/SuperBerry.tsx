import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Worked closely with the design team and Backend Team to develop the web application using Angular 11 and TypeScript.",
      keywords: ["Angular", "Css", "TypeScript"],
    },
    {
      text: "Worked on Resturant Management Application for McDonald’s using Angular",
      keywords: ["Angular", "Css", "TypeScript"],
    },
    {
      text: "Worked on improving the Product UI and UX using Angular Material.",
      keywords: [],
    },
       {
      text: "Learned about the Agile Methodology and worked on the Scrum Board to manage the tasks and the project.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@  Anicca Data Science Solutions</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Sept - April 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
