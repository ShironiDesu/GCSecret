import Image from "next/image";
import React from "react";
import "./problems.scss";
import FadeUp_block from "@/components/ui/FadeUp-block";
export default function Problems({ data }) {
  const icons = [
    "/icons/problems/recruitment.svg",
    "/icons/problems/work-in-progress.svg",
    "/icons/problems/adaptation.svg",
    "/icons/problems/employee.svg",
    "/icons/problems/folder-management.svg",
    "/icons/problems/motivation.svg",
    "/icons/problems/conflict-of-interest.svg",
    "/icons/problems/data.svg",
  ];
  return (
    <div className="problems">
      <div className="container">
        <FadeUp_block>
          <h2>Избавьтесь от:</h2>
        </FadeUp_block>
        <ul className="problems__list">
          {data.map((text, index) => (
            <FadeUp_block key={index} delay={index / 10} trigger={".problems__list"}>
              <li>
                <Image src={icons[index]} alt="svg icon" width={64} height={64} loading="lazy" />
                <p>{text}</p>
              </li>
            </FadeUp_block>
          ))}
        </ul>
      </div>
    </div>
  );
}
