"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { NewsletterFormSchema } from "@/lib/schema";
import { addContact } from "@/app/_actions";
import { toast } from "sonner";
import Card from "../card/card.component";
import ButtonSubmit from "../button/button-submit.component";

export type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(NewsletterFormSchema),
  });

  const processForm: SubmitHandler<NewsletterFormInputs> = async (data) => {
    const result = await addContact(data);

    if (result?.success) {
      console.log(result);
      toast.success("Přihlášení k odběru bylo úspěšné!");
      reset();
      return;
    }

    console.log(result);

    toast.error("Něco se pokazilo!");
  };

  return (
    <div className="mb-8">
      <Card>
        <div className="p-8 lg:p-12">
          <h1 className="text-xl font-semibold">
            Nebo se přihlásit k odběru novinek
          </h1>
          <form onSubmit={handleSubmit(processForm)}>
            <fieldset className="form-control lg:w-42">
              <div className="mt-6 flex-1">
                <input
                  id="email"
                  autoComplete="email"
                  type="email"
                  placeholder="Váš e-mail"
                  className="input input-bordered w-full bg-gray-100 p-3 rounded-lg mb-2"
                  {...register("email")}
                />
                {errors.email?.message && (
                  <p className="ml-1 mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <label className="label">
                {errors.email?.message && (
                  <p className="ml-1 mt-1 text-sm text-red-900">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </fieldset>

            <ButtonSubmit variant="variant-contact">
              {isSubmitting ? "Odesílám..." : "Odeslat"}
            </ButtonSubmit>
          </form>
        </div>
      </Card>
    </div>
  );
}
