import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardsBurnedToday } from "@/components/ui/cards/burned-today";
import { CardsActivityToday } from "@/components/ui/cards/activity-today";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <CardsBurnedToday />
      <CardsActivityToday />
    </div>
  );
}
