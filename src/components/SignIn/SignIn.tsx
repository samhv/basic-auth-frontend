import { ROUTES, useRoute } from "../RouteProvider"

export function SignIn() {
    const { setRoute } = useRoute()
    return <>
        <h1 className="text-3xl lg:text-4xl mt-5">Sign in</h1>
        <a onClick={() => setRoute({ page: ROUTES.SIGN_UP })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
            Go to sign up
        </a>
        <a onClick={() => setRoute({ page: ROUTES.ABOUT })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
            How does it work?
        </a>
    </>
}
