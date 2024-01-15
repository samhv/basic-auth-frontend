import React, { ComponentProps } from "react"
import { Input } from "./components/Input"
import { Label } from "./components/Label"
import { Error } from "./components/Error"

export function Form({ onSubmit, children }: {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => unknown,
    children: React.ReactNode
}) {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

Form.Input = Input

Form.Error = Error

Form.Label = Label