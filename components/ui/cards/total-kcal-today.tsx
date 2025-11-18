"use client"

import * as React from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardsTotalKcalTodayProps {
    burnedKcal?: number
    distanceKm?: number
}

export function CardsTotalKcalToday({
    burnedKcal = 350,
    distanceKm = 3
}: CardsTotalKcalTodayProps) {
    // Convert distance to kcal: 1 km ≈ 50 kcal (based on activity-today.tsx)
    const distanceKcal = distanceKm * 50
    const totalKcal = burnedKcal + distanceKcal

    return (
        <Card className="h-full gap-5 border-2 border-primary hover:bg-primary/15 transition-all duration-300">
            <CardHeader>
                <CardTitle>Total kcal today</CardTitle>
                <CardDescription>
                    {burnedKcal} kcal burned
                    {distanceKcal > 0 && `+ ${distanceKcal.toFixed(0)} kcal from ${distanceKm.toFixed(1)} km`}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-center justify-center pb-12">
                <div className="text-center">
                    <div className="text-4xl font-bold tracking-tighter tabular-nums">
                        <p>{totalKcal.toFixed(0)}</p>
                    </div>
                    <div className="text-muted-foreground text-xs uppercase">
                        kcal
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

