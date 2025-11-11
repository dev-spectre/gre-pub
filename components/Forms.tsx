import { Button } from "./Button";

export function LeadGenerationForm() {
  return (
    <div className="inline-block rounded-xl py-1">
      <h2 className="mb-6 text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
        Request for a demo session
      </h2>
      <form className="flex flex-col gap-2 text-sm text-[#1F1D39] sm:gap-4 sm:text-base">
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2"
            placeholder="Eg.: Abhishek"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="block" htmlFor="email">
            Email ID
          </label>
          <input
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2"
            placeholder="Eg.: abhishek@example.com"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="block capitalize" htmlFor="contactNumber">
            Contact number
          </label>
          <input
            placeholder="Eg.: +91-7798773994"
            type="text"
            id="contactNumber"
            pattern="+[0-9]{1,3}-[0-9]{10}"
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2"
          />
        </div>
        <div>
          <label className="block" htmlFor="course">
            Message
          </label>
          <textarea
            className="mt-2 mb-3 h-36 w-full resize-none rounded-md bg-black/5 px-2 py-1"
            placeholder="Eg.: GRE Universe Course"
            id="course"
          />
        </div>
        <div className="text-white">
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
}
