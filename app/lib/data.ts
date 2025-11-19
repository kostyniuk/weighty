import { db } from "@/lib/db";
import { burnedHistory, distanceHistory, users, weightHistory } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { setTimeout } from "timers/promises";

export const fetchUsers = async () => {
    await setTimeout(5000);
    const usersResult = await db.select().from(users);
    return usersResult;
}

export const fetchWeightHistory = async () => {
    await setTimeout(2000);
    const userId = 1;
    const weightHistoryResult = await db.select().from(weightHistory).where(eq(weightHistory.userId, userId));
    return weightHistoryResult;
}

export const fetchDistanceHistory = async () => {
    const userId = 1;
    const distanceHistoryResult = await db.select().from(distanceHistory).where(eq(distanceHistory.userId, userId));
    return distanceHistoryResult;
}

export const fetchBurnedHistory = async () => {
    const userId = 1;
    const burnedHistoryResult = await db.select().from(burnedHistory).where(eq(burnedHistory.userId, userId));
    return burnedHistoryResult;
}