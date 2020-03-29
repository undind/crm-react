interface InputsProps {
    iconType: string;
    type: string;
    placeholder: string;
    name: string;
}

export const generateFormFields = (type: string): Array<InputsProps> => {
    const loginFormArrayes = [
        {
            iconType: 'user',
            type: 'text',
            placeholder: 'Username',
            name: 'username'
        },
        {
            iconType: 'mail',
            type: 'email',
            placeholder: 'E-mail',
            name: 'email'
        },
        {
            iconType: 'lock',
            type: 'password',
            placeholder: 'Password',
            name: 'password'
        },
        {
            iconType: 'lock',
            type: 'password',
            placeholder: 'Confirm password',
            name: 'password_2'
        }
    ]
    switch (type) {
        case 'signin':
            return [loginFormArrayes[0], loginFormArrayes[2]];

        case 'signup':
            return loginFormArrayes;

        default:
            return [];
    }
};
