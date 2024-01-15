import {
    validateSignUpForm,
} from "../validations"

const validForm = {
    username: "ExampleUsername",
    email: "example@gmail.com",
    password: "awd12$%qsd12",
    passwordConfirmation: "awd12$%qsd12",
}

describe("validateSignUpForm", () => {
    describe("username", () => {
        it("can't be blank", () => {
            const { username } = validateSignUpForm({
                ...validForm,
                username: "",
            })
            expect(username).toEqual(["Can't be blank."])
        })
        it("can be valid", () => {
            const { username } = validateSignUpForm(validForm)
            expect(username).toEqual([])
        })
    })
    describe("email", () => {
        const validateEmail = (testEmail: string) => {
            const { email } = validateSignUpForm({
                ...validForm,
                email: testEmail,
            })
            return email
        }
        it("can't be blank", () => {
            expect(validateEmail("")).toEqual(["Can't be blank."])
        })
        it("can't be invalid", () => {
            expect(validateEmail("invalidEmailExample")).toEqual(["Email is invalid. It should be like: my_example@mydomain.example"])
        })
        it("can be valid", () => {
            expect(validateSignUpForm(validForm).email).toEqual([])
        })
    })
    describe("password", () => {
        const validatePassword = (testPassword: string) => {
            const { password } = validateSignUpForm({
                ...validForm,
                password: testPassword,
            })
            return password
        }
        it("can't be blank", () => {
            expect(validatePassword("")).toEqual(["Can't be blank."])
        })
        it("must be at least 8 characters", () => {
            expect(validatePassword("asw0!2")).toEqual(["Password must be at least 8 characters long."])
        })
        it("must contain a letter", () => {
            expect(validatePassword("%$#12%@#!!$%!212")).toEqual(["Password must contain a letter."])
        })
        it("must contain a number", () => {
            expect(validatePassword("%$#%w@#!!$%!wdwq")).toEqual(["Password must contain a number."])
        })
        it("must contain a special character", () => {
            expect(validatePassword("00kqjdwiuh19165ajhq")).toEqual(["Password must contain a special character."])
        })
        it("can be valid", () => {
            expect(validateSignUpForm(validForm).password).toEqual([])
        })
    })
    describe("passwordConfirmation", () => {
        it("can't be blank", () => {
            const { passwordConfirmation } = validateSignUpForm({
                ...validForm,
                passwordConfirmation: "",
            })
            expect(passwordConfirmation).toEqual(["Can't be blank."])
        })
        it("should match password", () => {
            const { passwordConfirmation } = validateSignUpForm({
                ...validForm,
                passwordConfirmation: `${validForm.password}x`,
            })
            expect(passwordConfirmation).toEqual(["It doesn't match the password."])
        })
        it("can be valid", () => {
            expect(validateSignUpForm(validForm).passwordConfirmation).toEqual([])
        })
    })
})
