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
// import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { NumericInput } from "../custom/numeric-input"


export function CardsActivityToday() {
    const [distance, setDistance] = React.useState(3)
    const [inputValue, setInputValue] = React.useState("3")

    function onClick(adjustment: number) {
        setDistance(Math.max(0, Math.min(9999, distance + adjustment)))
    }

    function onChange(value: number) {
        console.log("onChange", value)
        setDistance(value)
        setInputValue(value.toString())
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInputValue(value);

        // Allow empty or partial decimal input while typing
        if (value === '' || value === '.' || value === '-') {
            return;
        }

        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            const clampedValue = Math.max(0, Math.min(50, numValue));
            setDistance(clampedValue);
        }
    }

    function handleInputBlur() {
        // On blur, ensure we have a valid number
        const numValue = parseFloat(inputValue);
        if (isNaN(numValue) || inputValue === '' || inputValue === '.') {
            setInputValue(distance.toString());
        } else {
            const clampedValue = Math.max(0, Math.min(50, numValue));
            setDistance(clampedValue);
            setInputValue(clampedValue.toString());
        }
    }

    return (
        <Card className="h-full gap-5 w-120 h-60">
            <CardHeader>
                <CardTitle>Distance today</CardTitle>
                <CardDescription>Today you covered {distance} km.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-row items-center justify-center gap-4">
                    <Slider
                        value={[distance]}
                        max={20}
                        step={0.1}
                        onValueChange={(value) => onChange(value[0])}
                    />
                    <div className="flex flex-row items-center gap-1">
                        <div className="text-4xl font-bold tracking-tighter tabular-nums">
                            <NumericInput
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                variant="borderless"
                                step={0.1}
                                min={0}
                                max={50}
                                className="px-0 w-24"
                            />
                        </div>
                        <div className="text-muted-foreground text-xs uppercase">
                            km
                        </div>
                    </div>
                </div>
                <CardDescription className="flex flex-row items-center gap-1">
                    That's about
                    <div className="text-lg font-bold tracking-tighter text-primary">
                        {Math.round(distance * 50)}
                    </div>
                    kcal burned 🎉
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button variant="default">
                    Submit
                </Button>
            </CardFooter>
        </Card>
    )
}