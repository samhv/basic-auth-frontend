import { useState } from "react"
import { useRoute, ROUTES } from "../RouteProvider"
import { API_URL } from "../../constans"
import { Form } from "../Form"
import { validateSignUpForm } from "./validations"

export function SignUp() {
    const { setRoute } = useRoute()

    const [disabled, setDisabled] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

    const [errors, setErrors] = useState<{
      [key: string]: string[]
    }>({})

    const onCreate = async () => {
        const errors = validateSignUpForm({ username, email, password, passwordConfirmation })
        if (Object.keys(errors).length !== 0) {
          setErrors(errors)
          return;
        }
        setDisabled(true)
        try {
          const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: {
                username,
                email,
                password,
                password_confirmation: passwordConfirmation,
              }
            }),
          });

          if (!response.ok) {
            setErrors(await response.json())
          } else {
            setRoute({
              page: ROUTES.SIGN_IN,
            })
            alert("User created successfully!")
          }
        } catch (error) {
          console.error('Error sign up:', error);
        }
        setDisabled(false)
    }
    
    return <div className="w-full md:w-min">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl lg:text-4xl mt-5">Sign up</h1>
        </div>
        <Form onSubmit={(e) => {
            e.preventDefault()
            onCreate()
        }}>
            <Form.Label>Username</Form.Label>
            <Form.Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Remix3"
            />
            <Form.Error errors={errors["username"]} />
            <Form.Label>Email</Form.Label>
            <Form.Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="example@example.com"
            />
            <Form.Error errors={errors["email"]} />
            <Form.Label>Password</Form.Label>
            <p className="opacity-50">
              Minimum is 6 characters. It should contain a letter, a number and a special character.
            </p>
            <Form.Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder=""
            />
            <Form.Error errors={errors["password"]} />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Input
                type="password"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                value={passwordConfirmation}
                placeholder=""
            />
            <Form.Error errors={errors["passwordConfirmation"]} />
            <div className="flex flex-col items-center">
                <button disabled={disabled} type="submit" className="mt-5 border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out">
                    Create
                </button>
            </div>
        </Form>
        <div className="flex flex-col items-center">
          <a onClick={() => setRoute({ page: ROUTES.SIGN_IN })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
              Go to login
          </a>
          <a onClick={() => setRoute({ page: ROUTES.ABOUT })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">
              How does it work?
          </a>
        </div>
    </div>
}