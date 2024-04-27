import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface AccordionCompound extends FC<Props> {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

const Accordion: AccordionCompound = ({ children, ...props }) => {
  return (
    <AccordionContainer type="single" collapsible>
      {children}
    </AccordionContainer>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
