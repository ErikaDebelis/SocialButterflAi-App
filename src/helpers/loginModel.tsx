import * as Yup from "yup";

export interface LoginModel {
    Login:{
        Email: string,
        Password: string,
    }
}

export const LoginSchema = Yup.object(
    {
        Login: new Yup.ObjectSchema(
            {
                Email: Yup
                    .string()
                    .email("email valid")
                    .required("email required"),
                Password: Yup
                    .string()
                    .required("password required"),
            }
        )
    }
).required();