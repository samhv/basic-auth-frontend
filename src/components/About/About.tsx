import { BackButton } from "../BackButton"
import { Comment } from "../Comment"
import { ROUTES, useRoute } from "../RouteProvider"

export function About() {
    const { setRoute } = useRoute()
    return (
        <div className="flex flex-col">
          <BackButton onClick={
            () => setRoute({
              page: ROUTES.SIGN_UP,
            })
          } />
          <h1 className="text-3xl lg:text-4xl mt-5">
            How does it work?
          </h1>
          <Comment>
            <Comment.Title>Backend implementation</Comment.Title>
            <Comment.Body>
              <p>Rest API built on Ruby on Rails.</p>
              <p className="underline mt-4 mb-0.5">Engineer implementation:</p>
              <ul>
                <li><strong>Database</strong>: There is a table called 'Users' that stores the users, the columns include: username, email, password_digest.</li>
                <li><strong>API</strong>:
                  <ul>
                    <li><strong>POST /login</strong>: It verifies that the sent email and password are correct and, if so, returns the user's username.</li>
                    <li><strong>POST /signup</strong>: it creates a new user.</li>
                  </ul>
                </li>
              </ul>
              <p className="underline mt-4 mb-0.5">Are password saved as plain text?</p>
              <p>No, we save the hash of the password; later, during login, we hash the password sent by the user and compare the hashes. I used bcrypt for it.</p>
              <p className="underline mt-4 mb-0.5">How does password encryptation work?</p>
              <p>In the 'password_digest' column of the 'Users' table, we store the hash of the original password. Rails has an method to do it, it's called `has_secure_password`. You can find its usage in 'models/user.rb', and you can <a className="text-blue-800 hover:opacity-80" href="https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password">read about it here</a></p>
              <p className="underline mt-4 mb-0.5">What improvements can be done?</p>
              <p>There are many of them! A couple of them are:</p>
              <ul>
                <li><strong>Confirm by email</strong>: Upon signup, we could send a confirmation email to the user with a unique link they can use to verify their email. We'll need to add a confirmation_at column to the User table.</li>
                <li><strong>Sessions</strong>: We could use cookies or JWTs to save/retrieve sessions.</li>
                <li><strong>Database schema</strong>: We could use User table for user specific data, and separate the account data from it (email / password) on another table with a foreign key user_id. Later, we could include OAuth authentication, allowing a user to log in with an external account.</li>
              </ul>
            </Comment.Body>
          </Comment>
          <Comment>
            <Comment.Title>Frontend implementation</Comment.Title>
            <Comment.Body>
              Single app on React and Tailwind
              <p className="underline mt-4 mb-0.5">Engineer implementation:</p>
              <p>There are two main components:</p>
              <ul>
                <li><strong>SignIn</strong>: A sign in form with email and password which on submit it calls POST /login, and shows the result on a plain window.alert that includes your username if the login was success.</li>
                <li><strong>SignUp</strong>: A sign up form  that validates the values upon submission, and if they are valid, then it calls POST /signup</li>
              </ul>
              <p className="underline mt-4 mb-0.5">Validations:</p>
              <p>In 'SignUp/validations.ts', you can find all the validation functions being used for username, email, and password.</p>
              <p>You can find tests for them on "SignUp/__tests__/validations.ts". </p>
              <p className="underline mt-4 mb-0.5">What improvements can be done?</p>
              <p>There are many possible improvements! A few of them are:</p>
              <ul>
                <li><strong>API service</strong>: We are currently just using fetch and not using local storage/cache at all. We should create a service for it, if we were using Graphql we could just be using Relay or Apollo for example.</li>
                <li><strong>Routing</strong>: For simplicity, we built RouteProvider, but we aren't using routing at all! We could have routes like "/login", "/signup". Then, we can split the code on "components/" and "pages/".</li>
                <li><strong>System design components</strong>: We have a ton of duplicated css that can be abstracted on UI components.</li>
                <li><strong>Validations and refactor</strong>: The sign-in form isn't being validated at all. Also, the functions in 'validations.ts' could be moved to a shared file.</li>
                <li><strong>Improvements on SignUp components</strong>:
                  <ul>
                    <li>Instead of disabling the button on submit, we should show a loading state.</li>
                    <li>Each type of input should be encapsulated in its own component, for example, EmailInput, PasswordInput.</li>
                    <li>Instead of validating only on submit, each input could run a single validation as soon as the user loses focus on the input (e.g -- EmailInput runs email validations, etc).</li>
                    <li>Use React context to store the form values, so then, each input can grab only the piece of data it needs using a selector. This will improve reusability, separation of concerns, and performance, as each input will only be re-rendered when the data it depends on changes.</li>
                  </ul>
                </li>
              </ul>
            </Comment.Body>
          </Comment>
          <div className="lg:ml-auto mt-auto pt-20">
            <span className="opacity-70">Created with</span> ❤️ <span className="opacity-70">by Sam Hernandez</span>
          </div>
        </div>
    )
}