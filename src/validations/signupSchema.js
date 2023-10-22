import {object, string, ref} from "yup"
export const signupSchema = object().shape({
    email: string()
        .required("El email es requerido")
        .email("Ingresa un email válido"),
    password: string()
        .required("La contraseña es requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPass: string().oneOf([ref("password"), null], "Las contraseñas no coinciden").required()

})


