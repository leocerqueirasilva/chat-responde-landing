import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faq } from "./helpers";

export default function Faq() {
  return (
    <section className="cr-container !max-w-4xl">
      <Accordion type="single" collapsible className="w-full">
        {faq.map((q) => (
          <AccordionItem key={q.id} value={`item-${q.id}`} className="mb-5">
            <AccordionTrigger>{q.question}</AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
