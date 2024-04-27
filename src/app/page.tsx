"use client";
import Accordion from "@/components/molecules/Accordion";

export default function Home() {
  return (
    <main className="">
      <div className="px-4">
        <Accordion>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Is this Possible</Accordion.Trigger>
            <Accordion.Content>This is the test</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </main>
  );
}
