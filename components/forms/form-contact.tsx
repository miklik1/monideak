"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";
import { toast } from "sonner";
import Card from "../card/card.component";
import Button from "../button/button.component";
import ButtonSubmit from "../button/button-submit.component";
import "./contact.styles.scss";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("E-mail úspěšně odeslán!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Něco se pokazilo!");
  };

  return (
    <div className="form-contact lg:w-1/2 ">
      <div className="p-8 lg:p-12 w-100 lg:w-full">
        <h1 className="text-xl font-semibold">Můžete mi zanechat zprávu</h1>
        <form onSubmit={handleSubmit(processForm)} className="mt-6">
          <div className="mt-6 flex-1">
            <input
              id="email"
              autoComplete="email"
              type="email"
              placeholder="Váš e-mail"
              className="input input-bordered w-full bg-gray-100 p-3 rounded-lg"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="ml-1 mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <textarea
              id="message"
              autoComplete="message"
              className="textarea textarea-bordered w-full bg-gray-100 p-3 rounded-lg"
              placeholder="Dobrý den, mám zájem o..."
              rows={3}
              {...register("message")}
            />
            {errors.message?.message && (
              <p className="ml-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>
          <ButtonSubmit variant="variant-contact">
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </ButtonSubmit>
        </form>
      </div>
    </div>
  );
}
