import { CardsBurnedToday } from "@/components/ui/cards/burned-today";
import { CardsActivityToday } from "@/components/ui/cards/activity-today";
import { CardsWeightToday } from "@/components/ui/cards/weight-today";
import { CardsProgress } from "@/components/ui/cards/progress";
import { CardsTotalKcalToday } from "@/components/ui/cards/total-kcal-today";
import { UserSkeleton } from "@/components/ui/custom/user-skeleton";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { fetchDistanceHistory, fetchUsers, fetchWeightHistory } from "./lib/data";
import { fetchBurnedHistory } from "./lib/data";
import { Suspense } from "react";

async function Greeting() {
  const usersResult = await fetchUsers();
  return <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
    Hi, {usersResult[0]?.name} 👋
  </h1>
}



export default async function Home() {
  // 'use cache';
  // const [weightHistoryResult, burnedHistoryResult, distanceHistoryResult] = await Promise.all([
  //   fetchWeightHistory(),
  //   fetchBurnedHistory(),
  //   fetchDistanceHistory(),
  // ]);

  // console.log("weightHistoryResult", weightHistoryResult);
  // console.log("burnedHistoryResult", burnedHistoryResult);
  // console.log("distanceHistoryResult", distanceHistoryResult);

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 p-6 md:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-2">
          <Suspense fallback={<UserSkeleton />}>
            <Greeting />
          </Suspense>
          <p className="text-zinc-500 dark:text-zinc-400">
            Here is your daily activity summary.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CardsBurnedToday />
          <CardsActivityToday />
          <CardsWeightToday />
          <CardsTotalKcalToday />
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CardsProgress />
          </div>
          {/* Placeholder for future widgets or another chart */}
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col items-center justify-center min-h-[300px] lg:col-span-1 gap-2">
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <p className="text-muted-foreground font-medium">More insights coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
