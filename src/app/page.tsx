"use client";
import Accordion from "@/components/molecules/Accordion";

import { Alert, AlertDescription, AlertTitle } from "@/components/atoms/alert";

export default function Home() {
  return (
    <main className="">
      <div className="px-4">
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
}
