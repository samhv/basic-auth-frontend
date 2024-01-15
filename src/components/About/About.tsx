import { BackButton } from "../BackButton"
import { ROUTES, useRoute } from "../RouteProvider"

export function About() {
    const { setRoute } = useRoute()
    return (
        <div className="flex flex-col max-w-[800px]">
          <BackButton onClick={
            () => setRoute({
              page: ROUTES.SIGN_UP,
            })
          } />
          <h1 className="text-3xl lg:text-4xl mt-5">
            How does it work?
          </h1>
          <div className="lg:ml-auto mt-auto pt-20">
            <span className="opacity-70">Created with</span> ❤️ <span className="opacity-70">by Sam Hernandez</span>
          </div>
        </div>
    )
}