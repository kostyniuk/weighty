import { CardsBurnedToday } from "@/components/ui/cards/burned-today";
import { CardsActivityToday } from "@/components/ui/cards/activity-today";
import { CardsWeightToday } from "@/components/ui/cards/weight-today";
import { CardsProgress } from "@/components/ui/cards/progress";
import { CardsTotalKcalToday } from "@/components/ui/cards/total-kcal-today";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { fetchDistanceHistory, fetchUsers, fetchWeightHistory } from "./lib/data";
import { fetchBurnedHistory } from "./lib/data";


export default async function Home() {

  const usersResult = await fetchUsers();
  const [weightHistoryResult, burnedHistoryResult, distanceHistoryResult] = await Promise.all([
    fetchWeightHistory(),
    fetchBurnedHistory(),
    fetchDistanceHistory(),
  ]);

  console.log("weightHistoryResult", weightHistoryResult);
  console.log("burnedHistoryResult", burnedHistoryResult);
  console.log("distanceHistoryResult", distanceHistoryResult);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <div className="flex flex-row gap-4">
        Hi {usersResult[0]?.name}
        <CardsBurnedToday />
        <CardsActivityToday />
        <CardsWeightToday />
        <CardsTotalKcalToday />
      </div>
      <div className="w-[50%]">
        <CardsProgress />
      </div>
    </div>
  );
}
