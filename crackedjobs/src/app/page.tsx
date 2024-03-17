import React from "react";
import ForecastCard from "../components/ui/mainCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h1 className="text-9xl">hello world</h1>
      </div>
      <ForecastCard className="mx-auto" />
    </main>
  );
}
