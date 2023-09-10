export interface user { 
    name: string;
    password: string
}

export interface CreateUser {
    email: string;
    password: string;
    name: string;
    address: string;
}

export interface loginUser {
    email: string;
    password: string;
}