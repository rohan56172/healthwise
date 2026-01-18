import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does Health Wise ensure data privacy and security?",
    answer:
      "Health Wise utilizes JWT-based session management and advanced password hashing to secure all user data. Our architecture is designed to align with healthcare privacy standards, ensuring that patient metrics and clinical records are accessible only to authorized roles.",
    value: "item-1",
  },
  {
    question: "What metrics can patients track within the portal?",
    answer:
      "Patients can monitor critical wellness indicators including daily step counts, sleep duration, and water intake. This data is visualized on a personalized dashboard to help users maintain consistency with their long-term health goals.",
    value: "item-2",
  },
  {
    question: "How are preventive care reminders managed?",
    answer:
      "The system automatically generates reminders for essential preventive screenings, such as annual blood tests or vaccinations. These alerts are personalized based on the patient's profile to ensure high compliance with clinical recommendations.",
    value: "item-3",
  },
  {
    question: "Can healthcare providers monitor patient compliance remotely?",
    answer:
      "Yes. The Provider Dashboard allows clinicians to view assigned patients and their compliance status. Providers can quickly identify if health goals are being met or if a vital preventive checkup has been missed.",
    value: "item-4",
  },
  {
    question: "Is there a public resource for general health information?",
    answer:
      "Health Wise includes a dedicated Public Health Information page. This section provides verified updates on seasonal flu prevention, COVID-19 guidelines, and mental health resources, accessible to all users without requiring a login.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have technical or clinical questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact our support team
        </a>
      </h3>
    </section>
  );
};
