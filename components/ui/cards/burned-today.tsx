"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"
import { Bar, BarChart } from "recharts"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// const data = [
//     {
//         goal: 400,
//     },
//     {
//         goal: 300,
//     },
//     {
//         goal: 200,
//     },
//     {
//         goal: 300,
//     },
//     {
//         goal: 200,
//     },
//     {
//         goal: 278,
//     },
//     {
//         goal: 189,
//     },
//     {
//         goal: 239,
//     },
//     {
//         goal: 300,
//     },
//     {
//         goal: 200,
//     },
//     {
//         goal: 278,
//     },
//     {
//         goal: 189,
//     },
//     {
//         goal: 349,
//     },
// ]

// const chartConfig = {
//     goal: {
//         label: "Goal",
//         color: "var(--primary)",
//     },
// } satisfies ChartConfig

export function CardsActivityGoal() {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(0, Math.min(2000, goal + adjustment)))
    }

    return (
        <Card className="h-full gap-5 w-60">
            <CardHeader>
                <CardTitle>Burned today</CardTitle>
                <CardDescription>Today you have burned {goal} kcal.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-7 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 0}
                    >
                        <MinusIcon />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="text-center">
                        <div className="text-4xl font-bold tracking-tighter tabular-nums">
                            {goal}
                        </div>
                        <div className="text-muted-foreground text-xs uppercase">
                            kcal
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-7 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 2000}
                    >
                        <PlusIcon />
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
                {/* <div className="flex-1">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-full w-full"
                    >
                        <BarChart data={data}>
                            <Bar dataKey="goal" radius={4} fill="var(--color-goal)" />
                        </BarChart>
                    </ChartContainer>
                </div> */}
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="default">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    )
}