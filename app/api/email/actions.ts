import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schema";
import { ContactFormInputs } from "@/types/forms";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "info@monideak.cz",
        to: "info@monideak.cz",
        subject: `Vyplnění formuláře`,
        text: `E-mail: ${email}\nZpráva:\n${message}`,
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
} 