interface Sections {
    title: string
    image: string
    HTML: string
}

interface ErrMsg {
    ar: string,
    en: string
}

interface SignUp {
    name: string,
    email: string,
    password: string,
}

interface SignIn {
    email: string,
    password: string,
}

interface CV {

}

interface User {
    id: number;
    email: string;
    role: string;
    myCVs: CV[]
}

export type {
    Sections,
    SignUp,
    User,
    SignIn
}

// bad syntax with interface
