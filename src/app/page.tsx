import Image from "next/image";
import LandingPageComponent from "./LandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LandingPageComponent />
      </div>
    </main>
  );
}
