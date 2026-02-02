import z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { MailService } from "@/services/mail/MailService";
import { useForm, type SubmitHandler } from "react-hook-form";

const formSchema = z.object({
  email: z.email(),
});

type ISubmitForm = z.infer<typeof formSchema>;

export function GiftEmailModal() {
  const { register, handleSubmit, reset } = useForm<ISubmitForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const mail = new MailService();

  const { isSuccess, mutate, isPending } = useMutation({
    mutationFn: (email: string) => mail.send({ email }),
    onSuccess: () => {
      reset();
    },
    onError: (err) => {
      console.error("Erro ao enviar email:", err);
    },
  });

  const onSubmit: SubmitHandler<ISubmitForm> = (data) => {
    mutate(data.email);
  };

  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>
        <button className="rounded-lg bg-orange-400 px-5 py-3 font-extrabold text-white transition-colors hover:bg-orange-500">
          QUERO MEU POSTER
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* OVERLAY */}
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/65"
          />
        </Dialog.Overlay>

        <Dialog.Content
          asChild
          onPointerDownOutside={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
        >
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed left-1/2 top-1/2 w-full max-w-[420px]
                -translate-x-1/2 -translate-y-1/2
                rounded-2xl border border-white/10
                bg-zinc-900/75 p-7
                text-zinc-200 shadow-2xl
                backdrop-blur-xl
              "
            >
              <AnimatePresence mode="wait">
                <Dialog.Close asChild>
                  <button
                    aria-label="Fechar modal"
                    className="
                    absolute right-4 top-4
                    rounded-full p-1
                    text-zinc-400 transition
                    hover:bg-white/10
                    hover:text-zinc-50
                    focus:outline-none focus:ring-2 focus:ring-orange-400/60
                  "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </Dialog.Close>
                {isSuccess ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl font-semibold text-zinc-50"
                  >
                    🎁 Presente enviado com sucesso!
                  </motion.p>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Dialog.Title className="mb-1 text-xl font-semibold text-zinc-50">
                      Enviar presente por e-mail 🎉
                    </Dialog.Title>

                    <Dialog.Description className="mb-5 text-sm leading-relaxed text-zinc-400">
                      Insira seu e-mail para receber um presente especial como
                      forma de agradecimento por acessar nosso site.
                    </Dialog.Description>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        disabled={isPending}
                        className="
                        mb-3 w-full rounded-xl border border-white/10
                        bg-zinc-800/80 px-4 py-3
                        text-zinc-50 placeholder-zinc-500
                        outline-none transition
                        focus:border-orange-400/60
                        disabled:opacity-60
                      "
                        {...register("email", { required: true })}
                      />

                      {/* AÇÕES */}
                      <div className="mt-2 flex justify-end gap-2">
                        <Dialog.Close asChild>
                          <button
                            disabled={isPending}
                            className="
                            rounded-xl border border-white/15 px-4 py-2
                            text-zinc-300 transition
                            hover:border-white/30
                            hover:bg-white/5
                            hover:text-zinc-50
                            disabled:cursor-not-allowed disabled:opacity-50
                          "
                          >
                            Cancelar
                          </button>
                        </Dialog.Close>

                        <button
                          disabled={isPending}
                          type="submit"
                          className="
                          flex items-center gap-2
                          rounded-xl bg-orange-400 px-4 py-2
                          font-semibold text-white transition
                          hover:-translate-y-0.5 hover:bg-orange-500
                          disabled:cursor-not-allowed disabled:opacity-70
                        "
                        >
                          {isPending && (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                          )}
                          {isPending ? "Enviando..." : "Enviar presente"}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
