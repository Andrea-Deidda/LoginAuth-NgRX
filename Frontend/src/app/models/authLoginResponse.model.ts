


export interface AuthLoginResponse {
    status: string,
    data: Data
}

export interface Data {
    token: string,
    user: User,
    payload: Payload
}

export interface User {
    dob: Date,
    email: string,
    name: string,
    password: string,
    surname: string,
    username: string
}

export interface Payload {
    exp: number,
    iat: number,
    id: string
    username: string
}