export type RegisterType = {
    email: String, 
    userName: String, 
    password: String, 
    confirmPassword: String, 
}

export type LoginType = Pick<RegisterType,'userName'|'password'>