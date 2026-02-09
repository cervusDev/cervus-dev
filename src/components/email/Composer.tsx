import * as Dialog from "@radix-ui/react-dialog";
import { useCallback } from "react";
import {
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import MailService from "@/services/mail/MailService";
import { allowedTypes, maxFileSize } from "@/config/file";
import { EmailEditor } from "./Editor";
import { Attachments } from "./Attachments";

const formSchema = z.object({
  subject: z.string().min(3, "Informe o assunto"),
  text: z.string().min(10, "O corpo do email é obrigatório"),
  attachments: z
    .array(z.instanceof(File))
    .max(5, "Máximo de 5 anexos")
    .optional(),
});

export type EmailFormData = z.infer<typeof formSchema>;

export function EmailComposer() {
  const form = useForm<EmailFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      text: "",
      attachments: [],
    },
  });

  const onSubmit = useCallback(async (values: EmailFormData) => {
    try {
      if (values.attachments) {
        if (values.attachments.length > 3) {
          form.setError("attachments", {
            message: "Máximo de 3 anexos permitidos.",
          });
          return;
        }

        for (const file of values.attachments) {
          if (!allowedTypes.includes(file.type)) {
            form.setError("attachments", {
              message: `Tipo de arquivo não permitido: ${file.name}`,
            });
            return;
          }
          if (file.size > maxFileSize) {
            form.setError("attachments", {
              message: `Arquivo muito grande: ${file.name}`,
            });
            return;
          }
        }
      }

      MailService.send({
        text: values.text,
        subject: values.subject,
        attachments: values.attachments,
      });
      form.reset();
    } catch (err) {
      console.log('send email error', err)
    }
  }, [form]);

  const subjectError = form.formState.errors.subject;

  return (
    <Dialog.Root>
      {/* TRIGGER */}
      <Dialog.Trigger asChild>
        <button className="rounded-lg bg-orange-400 px-5 py-3 font-extrabold text-white transition-colors hover:bg-orange-500">
          ME ENVIE UMA PROPOSTA
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content
          className="
              fixed left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2

              w-[95vw]
              max-w-[900px]
              max-h-[85vh]

              rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-2xl

              flex flex-col text-white
              overflow-hidden
            "
        >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* HEADER */}
            <header
              className="
              p-4 border-b border-white/10
              sticky top-0 z-10
              bg-white/10 backdrop-blur-xl
            "
            >
              <input
                {...form.register("subject")}
                name="subject"
                placeholder="Assunto"
                className="
                  w-full bg-transparent
                  text-lg font-medium
                  placeholder:text-white/50
                  outline-none
                  focus:border-white/40
                "
              />

              {subjectError && (
                <p id="subject-error" className="mt-1 text-sm text-red-400">
                  {subjectError.message}
                </p>
              )}
            </header>

            {/* BODY */}
            <div className="flex-1 overflow-y-auto">
              <EmailEditor control={form.control} form={form} />
            </div>

            {/* FOOTER */}
            <footer
              className="
            p-4 border-t border-white/10
            space-y-4
            sticky bottom-0 z-10
            bg-white/10 backdrop-blur-xl
          "
            >
              {/* DISCLAIMER */}
              <p className="text-lg text-white/60 leading-relaxed">
                <strong className="text-white/80">Atenção:</strong> Este espaço
                tem como objetivo a elaboração de uma proposta de projeto. As
                informações enviadas serão utilizadas exclusivamente para
                análise e contato comercial.
              </p>

              {/* ACTIONS */}
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <Attachments control={form.control} />

                <div className="flex justify-end gap-3">
                  <Dialog.Close asChild>
                    <button
                      onClick={() => form.reset()}
                      type="button"
                      className="
                      px-4 py-2 rounded-lg
                      text-white/70
                      hover:text-white
                      hover:bg-white/10
                      hover:cursor-pointer
                      transition
                    "
                    >
                      Cancelar
                    </button>
                  </Dialog.Close>

                  <button
                    type="submit"
                    className="
                    px-6 py-2 rounded-lg
                    bg-orange-400 hover:bg-orange-400/80
                    backdrop-blur-md
                    hover:cursor-pointer
                    border border-white/20
                    transition
                  "
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}