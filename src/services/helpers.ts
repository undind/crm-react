interface InputsProps {
    iconType: string;
    type: string;
    placeholder: string;
    name: string;
}

export const generateFormFields = (type: string): Array<InputsProps> => {
    switch (type) {
        case 'signin':
            return [
                {
                    iconType: 'user',
                    type: 'text',
                    placeholder: 'Username',
                    name: 'username'
                },
                {
                    iconType: 'lock',
                    type: 'password',
                    placeholder: 'Password',
                    name: 'password'
                }
            ];

        case 'signup':
            return [
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
            ];

        default:
            return [];
    }
};
