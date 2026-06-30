import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which interview platforms are supported?",
    answer:
      "InterviewMate AI works alongside most browser-based interview platforms, coding assessments, and online meeting applications.",
  },
  {
    question: "Does it work on Windows and macOS?",
    answer:
      "Yes. Native desktop applications are available for both Windows and macOS.",
  },
  {
    question: "Is my interview data stored?",
    answer:
      "No. InterviewMate AI is designed with privacy in mind. Your sessions are processed securely and are not permanently stored.",
  },
  {
    question: "Can I use my own AI provider?",
    answer:
      "Yes. You can configure supported AI providers using your own API keys.",
  },
  {
    question: "Do I need to install browser extensions?",
    answer:
      "No. Everything runs from the desktop application. No browser extension is required.",
  },
  {
    question: "How do I get started?",
    answer:
      "Download the application, sign in with Google, and launch your interview. The companion is ready in just a few clicks.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-32"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before downloading InterviewMate AI.
          </p>

        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-slate-400 leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}