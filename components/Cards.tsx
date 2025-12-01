import { ButtonLink } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="max-w-[263px] rounded-2xl bg-white px-4 py-6 text-center capitalize shadow-md transition-all ease-in hover:shadow-xl hover:scale-105 duration-300 hover:-translate-y-1 xl:px-5 xl:py-8">
      <div className="mb-4 flex justify-center">
        <img
          className="h-20 w-20 rounded-full border-4 border-[#FF9053] object-cover p-2 sm:h-24 sm:w-24"
          src={imgSrc}
          alt={title}
        />
      </div>
      <h3 className="text-card-base-0 mb-2 font-[600] text-[#1B438F]">{title}</h3>
      <p className="text-card-xs-0 font-[300] text-[#626262] text-balance leading-relaxed">{description}</p>
    </section>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <article className="inline-block rounded-3xl bg-white px-6 py-8 text-lg font-[400] shadow-xl shadow-[#1B438F1A] sm:px-10 sm:py-12 md:rounded-3xl md:px-24 md:py-16 border border-[#E7ECF4]">
      {children}
    </article>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "30 Beginner Videos for Quant",
    "60+ Hours of Pre-Recorded Classes (Quant/Verbal)",
    "Full Study Material (1000+ Questions)",
    "2 Full-Length Adaptive Mock Tests",
    "1200-Word Vocabulary List",
    "1-Month and 3-Month Study Plans",
    "Validity of 3 Months (Extendable)",
  ];

  return (
    <Card>
      <h2 className="text-xl-0 mb-3 text-center leading-tight font-[900] text-[#1B438F] uppercase">
        GRE Universe Course
      </h2>
      <p className="text-sm-0 sm:text-x text-center font-[600] text-pretty capitalize">
        Your Entire GRE Universe In One Course — Everything You Need, Nothing
        You Don't.
      </p>

      <ul className="my-10 space-y-3">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-3 pb-3 border-b border-b-[#E7ECF4] last:border-b-0 transition-colors hover:bg-[#F9FAFB] px-2 rounded"
          >
            <div className="min-h-3 min-w-3 mt-0.5 flex-shrink-0 rounded-full border-2 border-[#FF9053] bg-[#FF90534D]"></div>
            <p className="text-sm-0 sm:text-base text-[#211C37] font-[500]">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-sm-0 text-white">
        <ButtonLink href="/#request-demo-form" label="Enroll now" />
      </div>
    </Card>
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
    <article className="isolate mt-2 flex w-[90%] max-w-4xl flex-col items-center gap-5 rounded-2xl bg-white px-6 py-6 shadow-lg shadow-[#1B438F0D] transition-all ease-in hover:shadow-2xl hover:shadow-[#1B438F15] hover:scale-105 duration-300 border border-[#E7ECF4] sm:flex-row sm:items-stretch sm:gap-8 sm:px-8 sm:py-7 md:px-14 md:py-10 lg:gap-10">
      <div className="relative flex-shrink-0 flex justify-center sm:justify-start sm:w-40 md:w-48">
        <img
          loading="lazy"
          className="absolute -top-1 -left-1 h-6 w-6 sm:h-10 sm:w-10 sm:-top-3 sm:-left-3"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          loading="lazy"
          className="h-32 w-32 rounded-full object-cover ring-4 ring-[#FF9053] sm:h-40 sm:w-40 md:h-48 md:w-48"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="flex flex-col justify-between flex-grow min-w-0">
        <div>
          <h3 className="text-card-base-1 mb-3 font-[800] line-clamp-2">{title}</h3>
          <p className="text-card-xs-n1 mb-4 font-[400] text-[#626262] italic line-clamp-4 sm:line-clamp-none">
            {description}
          </p>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-4 text-[#1B438F]">
            <p className="text-card-base-2 font-[900]">
              {greScore}/340
            </p>
            <a className="inline-block flex-shrink-0" href={linkedin} target="_blank" rel="noopener noreferrer">
              <img
                loading="lazy"
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                src="/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <p className="text-card-xs-1 font-[900] truncate">{name}</p>
          <p className="text-xs font-[500] text-[#108267] sm:text-sm md:text-base truncate">
            {designation}
          </p>
        </div>
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
    <article className={`flex-grow rounded-xl px-4 pt-6 pb-4 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="mx-2 mb-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
          <img className="h-7 w-7" src={imgSrc} alt={title} />
        </div>
        <h4 className="text-sm font-[600] text-[#1F1D39]">{title}</h4>
      </div>
      <div className="flex items-center justify-between gap-2 rounded-lg bg-white/80 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-[500] text-[#626262]">
          <img src="/icons/book.png" alt="articles" className="h-4 w-4" />
          <span>{articles}</span>
        </div>
        <div className={`${className} h-5 w-px rounded-full opacity-30`}></div>
        <div className="flex items-center gap-2 text-xs font-[500] text-[#626262]">
          <img src="/icons/tasks.png" alt="assignments" className="h-4 w-4" />
          <span>{assignments}</span>
        </div>
        <div className={`${className} h-5 w-px rounded-full opacity-30`}></div>
        <div className="flex items-center gap-2 text-xs font-[500] text-[#626262]">
          <img src="/icons/people.png" alt="members" className="h-4 w-4" />
          <span>{members}</span>
        </div>
      </div>
    </article>
  );
}
