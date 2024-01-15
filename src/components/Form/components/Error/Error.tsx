export function Error({ errors }: {
    errors: string[]
}) {
    return errors?.map(error => <p className="mt-1 text-red-500">{error}</p>)
}