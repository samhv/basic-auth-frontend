export function Error({ errors }: {
    errors: string[]
}) {
    return <p className="mt-1 text-red-500">{errors?.[0]}</p>
}