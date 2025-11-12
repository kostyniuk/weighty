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
import { ButtonGroup } from "../button-group"

export function CardsWeightToday() {
    const [weight, setWeight] = React.useState(70)
    const [currentControl, setCurrentControl] = React.useState<"plus" | "minus" | null>("plus")

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
                <CardDescription>Your weight is {weight.toFixed(2)} kg.</CardDescription>
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
                            <p>{weight.toFixed(2)}</p>
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
                <div className="flex gap-4 items-center mt-2">
                    <ButtonGroup orientation="vertical" aria-label="Media controls" className="">
                        <Button variant={currentControl === "plus" ? "control" : "outline"} size="icon" onClick={() => setCurrentControl("plus")}>
                            <PlusIcon />
                        </Button>
                        <Button variant={currentControl === "minus" ? "control" : "outline"} size="icon" onClick={() => setCurrentControl("minus")}>
                            <MinusIcon />
                        </Button>
                    </ButtonGroup>
                    <div className="flex flex-col gap-2 [&_div]:flex [&_div]:gap-2">
                        <div>
                            <Button variant="outline" size="icon" onClick={() => onClick(currentControl === "plus" ? 0.05 : -0.05)}>.05</Button>
                            <Button variant="outline" size="icon" onClick={() => onClick(currentControl === "plus" ? 1 : -1)}>1</Button>
                        </div>
                        <div>
                            <Button variant="outline" size="icon" onClick={() => onClick(currentControl === "plus" ? 5 : -5)}>5</Button>
                            <Button variant="outline" size="icon" onClick={() => onClick(currentControl === "plus" ? 10 : -10)}>10</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="default">
                    Submit
                </Button>
            </CardFooter>
        </Card >
    )
}

