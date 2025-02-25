import { z } from 'zod';
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schema';

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;
export type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>; 