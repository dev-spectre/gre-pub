"use client";

import { SimpleCourseCard } from "@/components/Cards";
import { StudyPlanner } from "@/components/StudyPlanner";

export default function UserDashboard() {
  return (
    <main className="rounded border border-[#E5E5E5] bg-white px-5 py-8.5">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl text-[#211C37]">Hello 👋</h3>
          <p className="text-xs text-[#85878D]">
            Let&apos;s learn something new today!
          </p>
        </div>
      </div>

      <section className="mb-5 flex flex-wrap gap-4">
        <SimpleCourseCard
          title="Quantitative"
          imgSrc="/icons/quantitative.png"
          className="bg-[#F8EFE2]"
        />
        <SimpleCourseCard
          title="Verbal"
          imgSrc="/icons/verbal.png"
          className="bg-[#EFF7E2]"
        />
        <SimpleCourseCard
          title="Mock Tests"
          imgSrc="/icons/qualitative.png"
          className="bg-[#E1E2F6]"
        />
      </section>

      <StudyPlanner />
    </main>
  );
}
