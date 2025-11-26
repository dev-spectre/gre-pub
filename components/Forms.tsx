"use client";

import { Button } from "./Button";

export function LeadGenerationForm() {
  const handleSubmit = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const contactNumber = document.getElementById(
      "contact-number",
    ) as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    if (!(name?.value && email?.value && contactNumber?.value)) {
      return;
    }

    let formData = new FormData();
    formData.append("entry.2005620554", name.value);
    formData.append("entry.1045781291", email.value);
    formData.append("entry.1166974658", contactNumber.value);
    formData.append("entry.839337160", message.value);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfy333aoi-AkxAmuvO8ZHmOywB9vLkXkxmetYrvGOafWkJyjQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      },
    ).then(() => {
      const successMsg = document.getElementById("success-msg");
      successMsg?.classList.remove("hidden");

      setTimeout(() => {
        name.value = "";
        email.value = "";
        contactNumber.value = "";
        message.value = "";
        successMsg?.classList.add("hidden");
      }, 5000);
    });
  };

  return (
    <div className="inline-block max-w-[34rem] rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
      <h2 className="mb-6 text-center text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
        Request demo session
      </h2>
      <form className="text-sm-0 flex flex-col gap-2 text-[#1F1D39]">
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            required
            className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
            placeholder="Eg.: John Doe"
            type="text"
            id="name"
          />
        </div>
        <div className="gap-2 gap-x-4 sm:flex">
          <div className="mb-2 flex-2/3 sm:mb-0">
            <label className="block" htmlFor="email">
              Email ID
            </label>
            <input
              required
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
              placeholder="Eg.: johndoe@mail.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block capitalize" htmlFor="contactNumber">
              Contact number
            </label>
            <input
              required
              placeholder="Eg.: +91-7798773994"
              type="text"
              id="contact-number"
              pattern="+[0-9]{1,3}-[0-9]{10}"
              className="border/5 mt-1 mb-3 h-8 w-full rounded-md border border-gray-200 bg-black/5 px-2"
            />
          </div>
        </div>
        <div>
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea
            className="border/5 mt-1 mb-3 h-24 w-full resize-none rounded-md border border-gray-200 bg-black/5 px-2 py-1"
            placeholder="Eg.: GRE Universe Course"
            id="message"
          />
        </div>
        <div className="text-white">
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </form>
      <p
        id="success-msg"
        className="mt-7 hidden rounded-md border border-[#1B438F]/50 bg-[#D6E4FF]/50 p-3 text-center text-[#1B438F]"
      >
        We will contact you soon!
      </p>
    </div>
  );
}
