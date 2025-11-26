import { Card } from "@/components/Cards";

export default function refundPolicy() {
  return (
    <section className="px-fluid-container grid grid-cols-1 place-items-center bg-gradient-to-b from-[#1c4490] to-[#0f2247] pt-16">
      <Card>
        <div className="text-sm-0 max-w-4xl py-3 text-[#1F1D39]">
          <p className="text-card-xs-0 mb-4">
            <strong>Last Updated:</strong> 25 November 2025
          </p>

          <h1 className="text-xl-0 pb-8 text-center leading-tight font-[900] text-[#1B438F]">
            Refund &amp; Cancellation Policy
          </h1>

          <article>
            <section>
              <h2 className="mb-4 border-b border-b-[#1B438F33] pb-2 text-xl font-semibold">
                1. Refund Policy
              </h2>
              <p className="mb-3">
                All purchases made on punitmishraprep.com for courses and
                tutoring services are <strong>final and non-refundable</strong>.
              </p>
            </section>

            <section>
              <h2 className="mt-6 mb-4 border-b border-b-[#1B438F33] pb-2 text-xl font-semibold">
                2. Rescheduling &amp; Cancellation
              </h2>
              <p className="mb-3">
                This <strong>no-refund policy</strong> applies to both courses and tutoring
                sessions.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Tutoring sessions may be <strong>rescheduled with at least 48 hours'
                  advance notice</strong>, subject to tutor availability and
                  discretion.
                </li>
                <li>
                  Missed sessions or late-notice cancellations may be counted as
                  completed.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mt-6 mb-4 border-b border-b-[#1B438F33] pb-2 text-xl font-semibold">
                3. Contact Information
              </h2>
              <p className="mb-3">
                For any questions regarding this policy, contact MILLIONAIREGRE
                LLP at:
              </p>
              <address className="mt-4 space-y-1 not-italic">
                <span className="block">
                  Email:{" "}
                  <a
                    href="mailto:hello@punitmishraprep.com"
                    className="text-blue-600 hover:underline"
                  >
                    hello@punitmishraprep.com
                  </a>
                </span>
                <span className="block">Phone: +91 9910917049</span>
              </address>
            </section>
          </article>
        </div>
      </Card>
    </section>
  );
}
