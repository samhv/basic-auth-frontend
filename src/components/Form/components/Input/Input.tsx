import { ComponentProps } from "react";

export function Input(props: ComponentProps<'input'>) {
    return <input className="mt-0.5 block border border-black h-10 px-5 rounded-md text-base w-full w-full md:w-[420px]" {...props}/>
}