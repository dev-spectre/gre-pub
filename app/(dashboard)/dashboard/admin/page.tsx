import { SimpleCourseCard } from "@/components/Cards";
import { HourSpent, Performance } from "@/components/Charts";

export default function AdminDashboard() {
  const leaderboard = [
    {
      name: "Charlie Rawal",
      imgSrc: "/images/leader1.jpg",
      course: 53,
      hour: 250,
      point: "13.450",
      prevRank: 2,
    },
    {
      name: "Ariana Agarwal",
      imgSrc: "/images/leader2.jpg",
      course: 88,
      hour: 212,
      point: "10.333",
      prevRank: 1,
    },
  ];

  return (
    <main className="rounded border border-[#E5E5E5] bg-white px-5 py-8.5">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-xl text-[#211C37]">Admin Dashboard 👋</h3>
          <p className="text-xs text-[#85878D]">
            Manage your GRE platform here.
          </p>
        </div>
        <div className="flex">
          <input
            className="rounded-l-lg border border-r-0 border-[#E7EAE9] px-3"
            type="text"
            placeholder="Search from courses..."
          />
          <button>
            <img
              className="rounded-r-lg border border-l-0 border-[#E7EAE9] px-3 py-2"
              src="/icons/search.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      <section className="flex flex-wrap gap-4">
        <SimpleCourseCard
          title="Qualitative"
          imgSrc="/icons/qualitative.png"
          className="bg-[#E1E2F6]"
        />
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
      </section>

      <section className="grid grid-cols-2 gap-3">
        <article>
          <h2 className="mt-4.5 mb-3.5">Hours Spent</h2>
          <HourSpent />
        </article>
        <article>
          <h2 className="mt-4.5 mb-3.5">Point Progress</h2>
          <Performance />
        </article>
      </section>

      <section>
        <h2 className="mt-5 mb-3">Leader Board</h2>
        <table className="relative w-full text-sm font-[400]">
          <thead className="border-b border-b-[#F2F2F2] text-xs font-[400] text-[#84868A] uppercase">
            <tr>
              <th className="pb-2 pl-2 text-start">Rank</th>
              <th className="pb-2 pl-16 text-start">Name</th>
              <th className="pb-2 text-start">Course</th>
              <th className="pb-2 text-start">Hour</th>
              <th className="pb-2 text-start">Point</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((data, rank) => (
              <tr key={rank} className="text-[#676767]">
                <td>
                  <div className="flex items-center gap-2 pl-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F5F7FB] text-xs">
                      {rank + 1}
                    </span>
                    {data.prevRank > rank + 1 && (
                      <img src="/icons/gain.svg" alt="" />
                    )}
                    {data.prevRank < rank + 1 && (
                      <img src="/icons/lost.svg" alt="" />
                    )}
                    {data.prevRank === rank + 1 && (
                      <img className="opacity-0" src="/icons/gain.svg" alt="" />
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      className="h-8 w-8 overflow-hidden rounded-full"
                      src={data.imgSrc}
                      alt=""
                    />
                    <span className="font-[400]">{data.name}</span>
                  </div>
                </td>
                <td className="py-3 text-start font-[400]">{data.course}</td>
                <td className="py-3 pl-1.5 text-start font-[400]">
                  {data.hour}
                </td>
                <td className="py-3 text-start font-[400] text-[#3BAFA8]">
                  {data.point}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
