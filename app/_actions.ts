"use server";

import { z } from "zod";
import { Resend } from "resend";
import {
  ContactFormSchema,
  FormDataSchema,
  NewsletterFormSchema,
} from "@/lib/schema";
import ContactFormEmail from "@/emails/contact-form-email";
import { NewsletterFormInputs } from "@/components/forms/form-newsletter";

type Inputs = z.infer<typeof FormDataSchema>;

export async function addEntry(data: Inputs) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
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
