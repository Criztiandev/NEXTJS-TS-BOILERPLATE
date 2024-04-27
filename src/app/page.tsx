"use client";
import Accordion from "@/components/molecules/Accordion";
import BreadCrumbs from "@/components/molecules/BreadCrumbs";

export default function Home() {
  return (
    <main className="">
      <div className="px-4">
        <BreadCrumbs
          separator={<div>hi</div>}
          items={[
            { label: "Test", path: "/test" },
            { label: "Test 3", path: "/test3" },
          ]}
        />
      </div>
    </main>
  );
}
