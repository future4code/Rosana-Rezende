
export const loginForm = [
    {
        name: "username",
        label: "Nome do Usuário",
        type: "text",
        required: true,
        pattern: "[A-Za-zÀ-ú ]{3,}",
        title: "O campo Nome do Usuário deve ter no mínimo 3 letras.",
    },
    {
        name: "email",
        label: "E-mail",
        type: "email",
        required: true,
    },
    {
        name: "password",
        label: "Senha",
        type: "password",
        required: true,
        pattern: "[A-Za-z0-9]{5,}",
        title: "O campo Senha deve ter no mínimo 5 letras ou números, sem espaço.",
    },
]
