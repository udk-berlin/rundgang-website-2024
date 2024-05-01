import ProgramPageItems from "@/app/program/components/items/items";
import {Suspense} from "react";

export interface ProgramPageProps {
}

export default function ProgramPage({}: ProgramPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Program Page
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProgramPageItems />
      </Suspense>
    </main>
  );
}
