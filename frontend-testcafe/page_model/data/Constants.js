import dotenv from 'dotenv'
dotenv.config()

export const ROLES = {
    VALID_USER:{
        USERNAME: process.env.USERNAMETEST,
        PASSWORD: process.env.PASSWORD
        
    },
    INVALID_USER:{
        USERNAME:'invalid_user',
        PASSWORD:'invalid_password'
    },
    LOCKED_USER:{
        USERNAME: 'locked_out_user',
        PASSWORD: process.env.PASSWORD
    },
    PROBLEM_USER:{
        USERNAME: 'problem_user',
        PASSWORD: process.env.PASSWORD
    },
    PERFORMANCE_USER:{
        USERNAME: 'performance_glitch_user',
        PASSWORD: process.env.PASSWORD
    }
}

export const USERINFORMATION = {
    USER1:{
        FIRSTNAME: 'Sofia',
        LASTNAME: 'Milanes',
        POSTALCODE: '37160'
        
    }
}