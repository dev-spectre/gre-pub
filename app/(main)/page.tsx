import { TestimonialCarousel } from "@/components/Animations";
import { Button } from "@/components/Button";
import {
  CourseFeaturesCard,
  InfoCard,
  TestimonialCard,
} from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";

export default function Home() {
  const privatePersonalizedTutoring = [
    "Micro-Batch size for personalized attention.",
    "12+12 Live Classes (Quant & Verbal, 2 hours each).",
    "30+ Pre-Recorded Beginner Videos (Quant).",
    "Full Study Material (1000+ Questions).",
    "Video solutions for all questions.",
    "2 Full Length Adaptive Mock Tests.",
    "1200 words vocab list.",
    "Vocab quizzes.",
    "Continuous counselling and evaluation.",
    "Unlimited doubt clearing sessions",
    "1 year validity (Repeat batches as many times you want).",
  ];

  const about = [
    "Seasoned GRE instructor with 8+ years of experience and a 337/340 score.",
    "Taught 5000+ students, focusing on foundational skills, strategy, and time management.",
    "Offers a personalized approach with customized study plans to maximize student potential.",
    "Emphasizes critical thinking and analytical skills beneficial beyond the GRE.",
    "Join Punit Mishra's GRE Universe Course for top-tier instruction and success.",
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section
            id="about"
            className="container mx-auto flex flex-col items-center px-5 lg:pb-5"
          >
            <h2 className="font-montserrat mb-10 text-center text-2xl font-[900] text-white capitalize sm:text-3xl md:mb-16 md:text-4xl lg:mb-20">
              Why join Universe Course?
            </h2>
            <div className="row-auto grid max-w-fit grid-cols-2 gap-3 md:gap-6 lg:min-h-[390px] lg:grid-cols-4">
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
                imgSrc="/images/money-bag.png"
              />
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
                imgSrc="/images/money-bag.png"
              />
            </div>
            <div className="text-white mt-10 w-32">
              <Button label="Enroll now" />
            </div>
          </section>
        </div>
        <div
          id="courses"
          className="bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] px-5"
        >
          <div className="container mx-auto flex items-center justify-center py-20 lg:min-h-[100vh]">
            <CourseFeaturesCard />
          </div>
        </div>
        <section
          id="private-personalised-tutoring"
          className="container mx-auto px-5 pt-12 pb-8 sm:pt-21"
        >
          <div className="flex flex-wrap justify-around gap-12 text-[#1F1D39]">
            <div>
              <h2 className="pb-8 text-start text-2xl font-[900] text-[#1B438F] sm:text-4xl">
                Private Personalized Tutoring
              </h2>
              <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33]">
                {privatePersonalizedTutoring.map((data, key) => (
                  <li key={key} className="">
                    <div
                      key={`${data}-${key}`}
                      className="px-2.5 py-2 text-sm sm:text-base"
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
                <Button label="Know more" />
              </div>
            </div>
            <LeadGenerationForm />
          </div>
        </section>
      </main>

      <div className="bg-gradient-to-b from-[#1c4490] to-[#0f2247]">
        <section
          id="testimonials"
          className="relative flex items-center justify-center overflow-hidden pt-25 pb-38"
        >
          <TestimonialCarousel
            testimonialsData={[
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 1",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 2",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 3",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 4",
                linkedin: "#",
              },
                     {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 5",
                linkedin: "#",
              },
            ]}
          />
        </section>

        <section id="instructor">
          <article className="min-h-[450px] gap-12 bg-white px-5 py-12 sm:pt-21">
            <div className="flex flex-wrap-reverse justify-center gap-12">
              <div className="flex max-h-72 max-w-96 justify-center overflow-hidden rounded-xl">
                <img
                  className="w-full object-cover object-top"
                  src={"/images/prof-punit.jpg"}
                  alt="Score card"
                />
              </div>
              <div className="col-span-2">
                <h3 className="mb-6 text-2xl font-[900] text-[#1B438F] sm:text-4xl">
                  Punit Mishra
                </h3>
                <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33] text-[#1F1D39]">
                  {about.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2.5 px-2.5 py-2 text-sm sm:text-base"
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
