import { TestimonialCarousel } from "@/components/Animations";
import { ButtonLink } from "@/components/Button";
import { CourseFeaturesCard, InfoCard } from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";

export default function Home() {
  const privatePersonalizedTutoring = [
    "1:1 Private Classes",
    "1/2/3/4 Classes per Week, Customized to Your Convenience (1 Hour Each)",
    "Personalized Study Plan Based on the Student's Strengths and Weaknesses",
    "Time Management and Test-Taking Strategies",
    "Mock Evaluations",
    "Doubt Clearing",
    "Complete Study Material",
  ];

  const about = [
    "GRE Score: 337",
    "Perfect 170 In Quant—Three Consecutive Times",
    "4+ Years of GRE Teaching Experience",
    "Mentored Over 1,200 Students",
    "99th Percentile In CAT; Admitted to Multiple IIMs",
  ];

  const testimonialsData = [
    {
      imgSrc: "/images/siddharth.webp",
      title: "The Blueprint for My GRE Success.",
      description:
        "Initially, I was very confused, but then I discovered Punit Mishra Prep, and it worked like magic. Without using any flattery, I can say that the strategies for both the quant and verbal sections led to a tremendous improvement. I would personally recommend Punit Mishra Prep.",
      greScore: 328,
      designation: "",
      name: "Siddharth Kumar",
      linkedin: "https://www.linkedin.com/in/siddharth-kumar-a68099145/ ",
    },
    {
      imgSrc: "/images/sameer-jain.webp",
      title: "Personalized Plan, Foundational Results.",
      description:
        "Punit created a clear, personalized study plan that accounted for my work schedule. What stood out was his unique ability to identify and correct the root cause of my mistakes at a fundamental level. Highly recommended!",
      greScore: 321,
      designation: "",
      name: "Sameer Jain",
      linkedin: "https://www.linkedin.com/in/sameer-jain-bb153716a/",
    },
    {
      imgSrc: "/images/aryani.webp",
      title: "Deep Content Mastery, Simplified Learning.",
      description:
        "Punit has a deep understanding of the GRE content and structure, effectively guiding students through challenging sections. He truly sets himself apart by breaking down complex concepts into easy-to-understand explanations, fostering confidence and motivation.",
      greScore: 318,
      designation: "",
      name: "Aaryani Dogra",
      linkedin: "https://www.linkedin.com/in/aaryani-dogra-08426717b/",
    },
    {
      imgSrc: "/images/pranit-jain.webp",
      title: "Structure Meets Empathy.",
      description:
        "Punit Sir is an incredibly supportive GRE coach who is flexible and tailors study plans and class timings to your needs. His material is well-structured, and he excels at creating personalized workflows to keep you on track. He's also one of the rare teachers available even on WhatsApp for doubt-solving and motivational support.",
      greScore: 336,
      designation: "",
      name: "Pranit Jain",
      linkedin: "https://www.linkedin.com/in/pranit-jain14/",
    },
    {
      imgSrc: "/images/sandesh.webp",
      title: "Complex Concepts Made Simple.",
      description:
        "Punit's ability to break down complex concepts into easily understandable parts is key. He tailors his methods to suit individual learning needs, ensuring steady progress and building confidence for test day. Thanks to his guidance, I was able to approach the GRE with clarity and determination.",
      greScore: 320,
      designation: "",
      name: "Sandesh Dholakia",
      linkedin: "https://www.linkedin.com/in/sandesh-dholakia/",
    },
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="grid grid-cols-1 place-items-center bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section
            id="about"
            className="px-fluid-container flex flex-col items-center lg:pb-5"
          >
            <h2 className="text-xl-0 mb-10 text-center leading-tight font-[900] text-white capitalize md:mb-16 lg:mb-20">
              Why join Universe Course?
            </h2>
            <div className="row-auto grid max-w-fit grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              <InfoCard
                title="Realistic Strategies"
                description="No fluff, just proven techniques that work."
                imgSrc="/images/chess-fill.svg"
              />
              <InfoCard
                title="Beginner Friendly"
                description="A supportive environment for all skill levels."
                imgSrc="/images/star-badge.svg"
              />
              <InfoCard
                title="Comprehensive"
                description="Covers everything you need, nothing you don't."
                imgSrc="/images/book-education.png"
              />
              <InfoCard
                title="Affordable"
                description="High quality prep at a fair price."
                imgSrc="/images/money-bag.webp"
              />
            </div>
          </section>
        </div>
        <div
          id="courses"
          className="scroll-mt-5 bg-gradient-to-b from-[#e7ecf4] to-[#bec9df]"
        >
          <div className="px-fluid-container flex items-center justify-center py-24 lg:min-h-[90vh]">
            <CourseFeaturesCard />
          </div>
          <section
            id="private-personalised-tutoring"
            className="px-fluid-container scroll-mt-16 pt-12 pb-21"
          >
            <div className="flex items-center justify-center gap-8 text-[#1F1D39] max-lg:flex-wrap xl:gap-12">
              <article className="inline-block rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-8 sm:py-10 md:rounded-3xl md:px-12 md:py-12">
                <h2 className="text-xl-0 pb-8 text-center leading-tight font-[900] text-[#1B438F]">
                  Private Personalized Tutoring
                </h2>
                <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33]">
                  {privatePersonalizedTutoring.map((data, key) => (
                    <li key={key} className="">
                      <div
                        key={`${data}-${key}`}
                        className="text-sm-0 px-2.5 py-2 text-pretty"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                          <p>{data}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 pr-2.5 text-white">
                  <ButtonLink href="/#request-demo-form" label="Know more" />
                </div>
              </article>
              <div id="request-demo-form" className="scroll-mt-28">
                <LeadGenerationForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="bg-gradient-to-b from-[#1c4490] to-[#0f2247]">
        <section
          id="testimonials"
          className="relative flex scroll-mt-28 items-center justify-center overflow-hidden pt-8 pb-16 sm:pt-0"
        >
          <TestimonialCarousel testimonialsData={testimonialsData} />
        </section>

        <section id="instructor" className="scroll-mt-16">
          <article className="px-fluid-container min-h-[450px] bg-white py-12 sm:pt-21">
            <div className="flex flex-wrap-reverse justify-center gap-8">
              <div className="flex aspect-[2.05/1] max-h-72 justify-center overflow-hidden rounded-xl">
                <img
                  loading="lazy"
                  className="w-full object-contain"
                  src={"/images/score-card.webp"}
                  alt="Score card"
                />
              </div>
              <div className="col-span-2">
                <h3 className="text-xl-0 mb-6 font-[900] text-[#1B438F]">
                  Punit Mishra
                </h3>
                <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33] text-[#1F1D39]">
                  {about.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm-0 flex items-center gap-2.5 px-2.5 py-2"
                    >
                      <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
