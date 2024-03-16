"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/schema";
import { sendEmail } from "@/app/_actions";
import { toast } from "sonner";
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
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <div className="formCont px-8 md:px-12 py-12 w-full">
      <h4 className="font-bold text-xl">Můžete mi zanechat zprávu</h4>
      <form onSubmit={handleSubmit(processForm)} className="mt-6">
        <div className="mt-6 flex-1">
          <input
            id="email"
            autoComplete="email"
            type="email"
            placeholder="Váš e-mail"
            className="input w-full p-3"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mt-6 w-full">
          <textarea
            id="message"
            autoComplete="message"
            className="textarea textarea-bordered w-full"
            placeholder="Dobrý den, mám zájem o..."
            rows={5}
            cols={5}
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="ml-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300"
        >
          {isSubmitting ? "Odesílám..." : "Odeslat"}
        </button>
      </form>
    </div>
  );
}
