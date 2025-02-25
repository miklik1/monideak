import { Resend } from "resend";
import { NewsletterFormSchema } from "@/lib/schema";
import { NewsletterFormInputs } from "@/types/forms";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function addContact(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data);

  if (result.success) {
    const { email } = result.data;
    try {
      const data = await resend.contacts.create({
        email: `${email}`,
        unsubscribed: false,
        audienceId: "ffb9be4b-06ff-4eea-bd87-55bf7b4b2edc",
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