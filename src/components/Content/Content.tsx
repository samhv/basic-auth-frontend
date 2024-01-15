import { About } from "../About"
import { SignIn } from "../SignIn"
import { SignUp } from "../SignUp"
import { ROUTES, useRoute } from "../RouteProvider"

export function Content() {
    const { route } = useRoute()
    switch(route.page) {
        case(ROUTES.ABOUT):
            return <About />
        case(ROUTES.SIGN_IN):
            return <SignIn />
        case(ROUTES.SIGN_UP):
            return <SignUp />
        default:
            return <About />
    }
}