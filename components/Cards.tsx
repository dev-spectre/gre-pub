import { Button } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="flex hover:scale-105 transition-transform ease-in max-w-[263px] flex-col justify-between rounded-xl bg-white px-3 py-4 text-center capitalize shadow-lg xl:px-5 xl:py-6">
      <h3 className="text-sm font-[400] sm:text-lg xl:text-2xl">{title}</h3>
      <img
        className="mx-auto my-4 h-20 w-20 rounded-full border-2 border-[#FF9053] px-3 py-3 sm:my-9 sm:h-[100px] sm:w-[100px]"
        src={imgSrc}
        alt=""
      />
      <p className="text-xs font-[300] sm:text-base">{description}</p>
    </section>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "30+ Pre-Recorded Beginner Vidoes (Quant)",
    "24 Pre-Recorded Classes (12 Quant, 12 Verbal) 2 hours each.",
    "Full Study Material (1000+ Questions).",
    "Video solutions for all questions.",
    "2 Full Length Adaptive Mock Tests.",
    "1200 words vocab list.",
    "3 Live doubt sessions every week.",
    "1 month and 2 months study plan.",
  ];

  return (
    <article className="inline-block rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-32 md:py-12">
      <h2 className="text-2xl font-[900] text-[#1B438F] uppercase sm:text-4xl">
        GRE 330 Course
      </h2>
      <p className="text-base font-[600] capitalize sm:text-base">
        World's most affordable complete <span className="uppercase">GRE</span>{" "}
        prep
      </p>

      <ul className="my-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2"
          >
            <div className="min-h-4 min-w-4 gap-2.5 rounded-full border border-[#FF9053] md:min-h-8 md:min-w-8"></div>
            <p className="text-sm text-[#211C37] sm:text-base">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-sm text-white sm:text-base">
        <Button label="Subscribe now" />
      </div>
    </article>
  );
}

interface TestimonialCardProps {
  title: string;
  description: string;
  greScore: number | `${number}`;
  name: string;
  linkedin: string;
  designation: string;
  imgSrc: string;
}

export function TestimonialCard({
  title,
  description,
  greScore,
  name,
  designation,
  linkedin,
  imgSrc,
}: TestimonialCardProps) {
  return (
    <article className="grid hover:scale-105 transition-all ease-in max-w-5xl w-[90%] grid-cols-10 gap-3 sm:gap-12 rounded-2xl bg-white md:px-15 sm:py-6 sm:px-8 px-5 py-3 md:py-7 lg:px-30 lg:py-14.5">
      <div className="relative col-span-4">
        <img
          className="absolute top-0 -left-5"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          className="absolute lg:h-[120%] top-10 h-[110%] max-w-[100%] rounded-full object-cover"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="col-span-6">
        <h3 className="md:mb-6 sm:mb-5 mb-3 text-base sm:text-xl font-[800] md:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="md:mb-12 sm:mb-5 mb-3 text-xs font-[600] text-[#626262] italic md:text-lg xl:text-xl">
          {description}
        </p>
        <div className="mb-3.5 flex lg:gap-13 md:gap-10 sm:gap-9 gap-6 text-[#1B438F]">
          <p className="sm:text-2xl text-lg font-[900] md:text-3xl xl:text-4xl">
            {greScore}/330
          </p>
          <a href={linkedin}>
            <img
              className="md:h-6 md:w-6 lg:h-8 lg:w-8 sm:h-5 sm:w-5 h-4 w-4"
              src="/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
        <p className="text-sm font-[900] sm:text-lg md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="xl:text-lg md:text-base sm:text-sm text-xs font-[500] text-[#21967B]">{designation}</p>
      </section>
    </article>
  );
}

interface CourseCardProps {
  title: string;
  articles: number | `${number}`;
  assignments: number | `${number}`;
  members: number | `${number}`;
  imgSrc: string;
  className: string;
}

export function CourseCard({
  title,
  articles,
  assignments,
  members,
  imgSrc,
  className,
}: CourseCardProps) {
  return (
    <article className={`flex-grow rounded-lg px-1.5 pt-5 pb-1.5 ${className}`}>
      <div className="mx-3.5 mb-2">
        <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <img className="h-6 w-6" src={imgSrc} alt="" />
        </div>
        <h4 className="text-sm">{title}</h4>
      </div>
      <div className="flex justify-between rounded-md bg-white/70 px-5 py-1">
        <div className="flex items-center gap-1.5">
          <img src="/icons/book.png" alt="articles" />
          <span>{articles}</span>
        </div>
        <div className={`${className} min-w-0.5 rounded-full`}></div>
        <div className="flex items-center gap-1.5">
          <img src="/icons/tasks.png" alt="assignments" />
          <span>{assignments}</span>
        </div>
        <div className={`${className} min-w-0.5 rounded`}></div>
        <div className="flex items-center gap-1.5">
          <img src="/icons/people.png" alt="members" />
          <span>{members}</span>
        </div>
      </div>
    </article>
  );
}
