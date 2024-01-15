import { useState } from "react"
import { Form } from "../Form"
import { ROUTES, useRoute } from "../RouteProvider"
import { API_URL } from "../../constans"

export function SignIn() {
    const { setRoute } = useRoute()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [disabled, setDisabled] = useState(false)

    const login = async () => {
        setDisabled(true)
        try {
          const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: {
                email,
                password,
              }
            }),
          });

          if (!response.ok) {
            alert("Email or password is wrong")
          } else {
            const { username } = await response.json() as { username: string }
            alert(`Logged in successfully! Welcome back ${username}!`)
          }
        } catch (error) {
          console.error('Error sign up:', error);
        }
        setDisabled(false)
    }

    return <div className="w-full">
        <div className="flex flex-col items-center">
            <h1 className="text-3xl lg:text-4xl mt-5">Sign in</h1>
        </div>
        <Form onSubmit={(e) => {
            e.preventDefault()
            login()
        }}>
            <Form.Label>Email</Form.Label>
            <Form.Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="example@gmail.com"
            />
            <Form.Label>Password</Form.Label>
            <Form.Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
            />  
            <div className="flex flex-col items-center">
                <button disabled={disabled} type="submit" className="mt-5 border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out">
                    Login
                </button>
            </div>
        </Form>
        <div className="flex flex-col items-center">
          <a onClick={() => setRoute({ page: ROUTES.SIGN_UP })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
              Go to sign up
          </a>
          <a onClick={() => setRoute({ page: ROUTES.ABOUT })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
              How does it work?
          </a>
        </div>
    </div>
}
