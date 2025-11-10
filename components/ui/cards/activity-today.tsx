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
                <CardDescription>Today you walked {distance} km.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-row items-center justify-center gap-4">
                <Slider
                    value={[distance]}
                    max={50}
                    step={0.1}
                    className="w-[80%]"
                    onValueChange={(value) => onChange(value[0])}
                />
                <div className="text-4xl font-bold tracking-tighter tabular-nums">
                    <NumericInput
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        variant="borderless"
                        step={0.1}
                        min={0}
                        max={50}
                    />
                </div>
                <div className="text-muted-foreground text-xs uppercase">
                    km
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