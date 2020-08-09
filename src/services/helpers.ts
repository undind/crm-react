type RulesRequired = {
    required: boolean;
    message: string;
}

type RulesEmail = {
    type: string;
    message: string;
}

interface InputsProps {
    iconType: string;
    type: string;
    placeholder: string;
    name: string;
    rules?: any;
}

export const generateFormFields = (type: string): Array<InputsProps> => {
    const loginFormArrayes = [
        {
            iconType: 'user',
            type: 'text',
            placeholder: 'Username',
            name: 'username',
            rules: [{ required: true, message: 'Please input your User name!' }],
        },
        {
            iconType: 'mail',
            type: 'email',
            placeholder: 'E-mail',
            name: 'email',
            rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                } as RulesEmail,
                {
                    required: true,
                    message: 'Please input your E-mail!',
                } as RulesRequired,
            ],
        },
        {
            iconType: 'lock',
            type: 'password',
            placeholder: 'Password',
            name: 'password',
            rules: [{ required: true, message: 'Please input your Password!' }],
        },
        {
            iconType: 'lock',
            type: 'password',
            placeholder: 'Confirm password',
            name: 'password_2',
        },
    ];
    switch (type) {
        case 'signin':
            return [loginFormArrayes[0], loginFormArrayes[2]];

        case 'signup':
            return loginFormArrayes;

        default:
            return [];
    }
};
