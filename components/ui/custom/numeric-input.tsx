import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Input, inputVariants } from "../input"

export interface NumericInputProps extends React.ComponentProps<"input">, VariantProps<typeof inputVariants> {
}

export function NumericInput({ ...props }: NumericInputProps) {

    return (
        <Input
            type="number"
            {...props}
        />
    )
}