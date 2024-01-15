const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const PASSWORD_HAS_LETTER = /[a-zA-Z]/;
const PASSWORD_HAS_NUMBER = /\d/;
const PASSWORD_HAS_SPECIAL_CHARACTER = /[^a-zA-Z0-9]/; 

const validateEmail = (email: string) => {
    const errors: string[] = []
    if (!email) {
        errors.push("Can't be blank.")
    } else if (!EMAIL_REGEX.test(email)) {
        errors.push("Email is invalid. It should be like: my_example@mydomain.example")
    }
    return errors
}

const validateUsername = (username: string) => {
    const errors: string[] = []
    if (!username) {
        errors.push("Can't be blank.")
    }
    return errors
}

const validatePassword = (password: string) => {
    const errors: string[] = []
    if (!password) {
        errors.push("Can't be blank.")
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.")
    }
    if (!PASSWORD_HAS_LETTER.test(password)) {
        errors.push("Password must contain a letter.")
    }
    if (!PASSWORD_HAS_NUMBER.test(password)) {
        errors.push("Password must contain a number.")
    }
    if (!PASSWORD_HAS_SPECIAL_CHARACTER.test(password)) {
        errors.push("Password must contain a special character.")
    }
    return errors
}

const validatePasswordConfirmation = (password: string, passwordConfirmation: string) => {
    const errors: string[] = []
    if (!passwordConfirmation) {
        errors.push("Can't be blank.")
    }
    if (password !== passwordConfirmation) {
        errors.push("It doesn't match the password.")
    }
    return errors
}

export const validateSignUpForm = ({
    username,
    email,
    password,
    passwordConfirmation
}: {
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string,
}) => {
    const errors: { [key: string]: string[] } = {}
    const emailErrors = validateEmail(email)
    if (emailErrors) {
        errors.email = emailErrors
    }
    const usernameErrors = validateUsername(username)
    if (usernameErrors) {
        errors.username = usernameErrors
    }
    const passwordErrors = validatePassword(password)
    if (passwordErrors) {
        errors.password = passwordErrors
    }
    const passwordConfirmationErrors = validatePasswordConfirmation(password, passwordConfirmation)
    if (passwordConfirmationErrors) {
        errors.passwordConfirmation = passwordConfirmationErrors
    }
    return errors
}
