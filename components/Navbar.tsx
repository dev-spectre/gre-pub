import Link from "next/link";

export default function Navbar() {
  return (
    <div className="font-montserrat fixed top-0 right-0 left-0 z-30 backdrop-blur bg-black/4">
      <nav className="container mx-auto flex items-center justify-between px-5 py-6 text-white">
        <div>
          <button>
            <div className="mr-5 xl:hidden">
              <div className="h-0.5 w-4 rounded bg-white"></div>
              <div className="my-1 h-0.5 w-4 rounded bg-white"></div>
              <div className="h-0.5 w-4 rounded bg-white"></div>
            </div>
          </button>
          <Link href="/" className="text-2xl font-[900]">
            PM Prep
          </Link>
        </div>
        <ul className="hidden gap-12 font-[600] capitalize lg:text-lg xl:flex xl:text-xl 2xl:text-2xl">
          <li>
            <a href="#" className="underline hover:underline">
              Universe course
            </a>
          </li>
          <li>
            <a
              href="#private-personalised-tutoring"
              className="hover:underline"
            >
              Private personalised tutoring
            </a>
          </li>
          <li>
            <a href="#courses" className="hover:underline">
              Student results
            </a>
          </li>
          <li>
            <a href="#instructor" className="hover:underline">
              Instructor
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <Link
          href="/dashboard"
          className="rounded-md border border-white px-3 py-1 text-sm font-[400] lg:text-lg xl:flex xl:text-xl 2xl:text-2xl"
        >
          Login
        </Link>
      </nav>
    </div>
  );
}

export function FooterNav() {
  return (
    <div className="bg-gradient-to-b from-[#0f2247] to-[#0B172D] pt-20">
      <footer className="bg-black/15 px-5 pt-13 text-white backdrop:blur sm:px-8 md:px-12 lg:px-36">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-b-white pb-8">
          <Link href="/" className="text-xl font-[400] md:text-2xl">
            PM Prep
          </Link>
          <ul className="flex gap-3 sm:gap-8">
            <li>
              <a href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/facebook.svg"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/instagram.svg"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/twitter.svg"
                  alt="X (Twitter)"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-auto md:w-auto"
                  src="/icons/youtube.svg"
                  alt="Youtube"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Main */}
        <div className="mt-4.5 gap-16 pb-24 sm:flex">
          <div className="mb-5 flex flex-col gap-5">
            <div>
              <h4 className="mb-2 text-lg font-[500] uppercase md:text-xl">
                Company
              </h4>
              <ul className="flex flex-wrap gap-3 text-base font-[400] text-[#A19FBA] md:flex-row md:gap-6 md:text-lg">
                <li>
                  <a href={"#"}>Home</a>
                </li>
                <li>
                  <a href={"#courses"}>Courses</a>
                </li>
                <li>
                  <a href={"#about"}>About Us</a>
                </li>
                <li>
                  <a href={"#testimonials"}>Testimonials</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-[500] uppercase md:text-xl">
                Important Links
              </h4>
              <ul className="flex flex-wrap gap-3 text-base font-[400] text-[#A19FBA] md:text-lg">
                <li>
                  <Link href="#">Faq's</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 sm:flex-col">
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Mail</h4>
              <p className="text-base text-[#A19FBA] md:text-xl">
                contact@gre.com
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-[500] md:text-xl">Phone</h4>
              <p className="text-base font-[400] text-[#A19FBA] md:text-xl">
                +91 - 9022 821 921
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      <aside className="group row-span-2 inline-block min-h-[100lvh] min-w-24 border-r border-r-[#E5E5E5] bg-white px-6.5 pt-8.5">
        <label htmlFor="menu-btn" className="mb-8 ml-2 inline-block">
          <img src="/icons/menu.png" alt="" />
        </label>
        <input type="checkbox" id="menu-btn" className="peer hidden" />
        <nav className="peer-[:not(:checked)]:min-w-44">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded bg-[#1B438F1A] px-2 py-2"
              >
                <img src="/icons/view-grid.png" alt="" />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/class-lesson.png" alt="" />
                <p>Courses</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/university.png" alt="" />
                <p>Universites</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img src="/icons/documents.png" alt="" />
                <p>Documents</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-2 hover:bg-[#1B438F1A]"
              >
                <img
                  className="-ml-1 h-7"
                  src="/icons/exam-multiple-choice.png"
                  alt=""
                />
                <p>Mock test</p>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
