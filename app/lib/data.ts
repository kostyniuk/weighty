import { db } from "@/lib/db";
import { burnedHistory, distanceHistory, users, weightHistory } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { setTimeout } from "timers/promises";


export const fetchUser = async () => {
    await setTimeout(5000);
    return (await db.select().from(users))[0];
}

export const fetchWeightHistory = async () => {
    "use cache";
    await setTimeout(2000);
    const userId = 1;
    const weightHistoryResult = await db.select().from(weightHistory).where(eq(weightHistory.userId, userId));
    return weightHistoryResult;
}

export const fetchDistanceHistory = async () => {
    "use cache";
    const userId = 1;
    const distanceHistoryResult = await db.select().from(distanceHistory).where(eq(distanceHistory.userId, userId));
    return distanceHistoryResult;
}

export const fetchBurnedHistory = async () => {
    "use cache";
    const userId = 1;
    const burnedHistoryResult = await db.select().from(burnedHistory).where(eq(burnedHistory.userId, userId));
    return burnedHistoryResult;
}