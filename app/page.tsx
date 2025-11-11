import { CardsBurnedToday } from "@/components/ui/cards/burned-today";
import { CardsActivityToday } from "@/components/ui/cards/activity-today";
import { CardsWeightToday } from "@/components/ui/cards/weight-today";
import { CardsProgress } from "@/components/ui/cards/progress";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <div className="flex flex-row gap-4">
        <CardsBurnedToday />
        <CardsActivityToday />
        <CardsWeightToday />
      </div>
      <div className="w-[50%]">
        <CardsProgress />
      </div>
    </div>
  );
}
