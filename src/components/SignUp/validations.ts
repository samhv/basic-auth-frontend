const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const PASSWORD_HAS_LETTER = /[a-zA-Z]/;
const PASSWORD_HAS_NUMBER = /\d/;
const PASSWORD_HAS_SPECIAL_CHARACTER = /[^a-zA-Z0-9]/; 

/**
 * Validates an email address.
 * @param email - The email address to be validated.
 * @returns An array of error messages. Empty if the email is valid.
 */
const validateEmail = (email: string): string[] => {
    const errors: string[] = []
    if (!email) {
        errors.push("Can't be blank.")
    } else if (!EMAIL_REGEX.test(email)) {
        errors.push("Email is invalid. It should be like: my_example@mydomain.example")
    }
    return errors
}

/**
 * Validates a username.
 * @param username - The username to be validated.
 * @returns An array of error messages. Empty if the username is valid.
 */
const validateUsername = (username: string): string[] => {
    const errors: string[] = []
    if (!username) {
        errors.push("Can't be blank.")
    }
    return errors
}

/**
 * Validates a password.
 * @param password - The password to be validated.
 * @returns An array of error messages. Empty if the password meets criteria.
 */
const validatePassword = (password: string): string[] => {
    const errors: string[] = []
    if (!password) {
        errors.push("Can't be blank.")
    } else if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.")
    } else {
        if (!PASSWORD_HAS_LETTER.test(password)) {
            errors.push("Password must contain a letter.")
        }
        if (!PASSWORD_HAS_NUMBER.test(password)) {
            errors.push("Password must contain a number.")
        }
        if (!PASSWORD_HAS_SPECIAL_CHARACTER.test(password)) {
            errors.push("Password must contain a special character.")
        }
    }
    return errors
}

/**
 * Validates that the password confirmation matches the password.
 * @param password - The original password.
 * @param passwordConfirmation - The password confirmation to be checked.
 * @returns An array of error messages. Empty if the confirmation matches.
 */
const validatePasswordConfirmation = (password: string, passwordConfirmation: string): string[] => {
    const errors: string[] = []
    if (!passwordConfirmation) {
        errors.push("Can't be blank.")
    } else if (password !== passwordConfirmation) {
        errors.push("It doesn't match the password.")
    }
    return errors
}

/**
 * Validates a sign-up form's fields.
 * @param param0 - Object containing username, email, password, and password confirmation.
 * @returns An object with keys as field names and values as arrays of error messages.
 */
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
}): { [key: string]: string[] } => {
    const errors: { [key: string]: string[] } = {}
    const emailErrors = validateEmail(email)
    if (emailErrors.length > 0) {
        errors.email = emailErrors
    }
    const usernameErrors = validateUsername(username)
    if (usernameErrors.length > 0) {
        errors.username = usernameErrors
    }
    const passwordErrors = validatePassword(password)
    if (passwordErrors.length > 0) {
        errors.password = passwordErrors
    }
    const passwordConfirmationErrors = validatePasswordConfirmation(password, passwordConfirmation)
    if (passwordConfirmationErrors.length > 0) {
        errors.passwordConfirmation = passwordConfirmationErrors
    }
    return errors
}
