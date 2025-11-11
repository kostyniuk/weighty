"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function CardsWeightToday() {
    const [weight, setWeight] = React.useState(70)

    const step = 0.1
    const min = 10
    const max = 300

    function onClick(adjustment: number) {
        setWeight(Math.max(min, Math.min(max, weight + adjustment)))
    }

    function onChange(value: number) {
        console.log("onChange", value)
        // Allow free typing - don't clamp during input
        // Only update if value is a valid number
        if (!isNaN(value)) {
            setWeight(value)
        }
    }

    function onBlur() {
        // Clamp the value when user finishes editing
        setWeight(Math.max(min, Math.min(max, weight)))
    }

    return (
        <Card className="h-full gap-5 w-60 h-80">
            <CardHeader>
                <CardTitle>Your weight today</CardTitle>
                <CardDescription>Today your weight is {weight.toFixed(1)} kg.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
                <div className="flex items-center justify-center gap-4">
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-7 rounded-full"
                        onClick={() => onClick(-step)}
                        disabled={weight <= min}
                    >
                        <MinusIcon />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="text-center flex-2">
                        <div className="text-4xl font-bold tracking-tighter tabular-nums">
                            <p>{weight.toFixed(1)}</p>
                        </div>
                        <div className="text-muted-foreground text-xs uppercase">
                            kg
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-7 rounded-full"
                        onClick={() => onClick(step)}
                        disabled={weight >= max}
                    >
                        <PlusIcon />
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
                <div className="flex gap-2 flex-wrap w-[80%] mt-4 [&_button]:w-5">
                    <Button variant="outline" onClick={() => onClick(1)}>+1</Button>
                    <Button variant="outline" onClick={() => onClick(5)}>+5</Button>
                    <Button variant="outline" onClick={() => onClick(10)}>+10</Button>
                    <Button variant="outline" onClick={() => onClick(-1)}>-1</Button>
                    <Button variant="outline" onClick={() => onClick(-5)}>-5</Button>
                    <Button variant="outline" onClick={() => onClick(-10)}>-10</Button>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="default">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    )
}

