import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().nonempty("Name is required."),
  message: z
    .string()
    .nonempty("Zpráva je povinná.")
    .min(6, { message: "Zpráva musí mít nejméně 6 znaků." }),
});

export const ContactFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail je povinný")
    .email("Nesprávný formát e-mailu."),
  message: z
    .string()
    .nonempty("Zpráva je povinná.")
    .min(6, { message: "Zpráva musí mít nejméně 6 znaků." }),
});
