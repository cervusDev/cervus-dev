import * as Dialog from "@radix-ui/react-dialog";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback } from "react";
import {
  useForm,
  Controller,
  type Control,
  type UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  subject: z.string().min(3, "Informe o assunto"),
  body: z.string().min(10, "O corpo do email é obrigatório"),
  attachments: z
    .array(z.instanceof(File))
    .max(5, "Máximo de 5 anexos")
    .optional(),
});

export type EmailFormData = z.infer<typeof formSchema>;

/* =======================
   EMAIL COMPOSER
======================= */
export function EmailComposer() {
  const form = useForm<EmailFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      body: "",
      attachments: [],
    },
  });

  const onSubmit = useCallback(async (values: EmailFormData) => {
    console.log("values", values);
  }, []);

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

/* =======================
   EDITOR
======================= */
interface IEmailEditor {
  control: Control<EmailFormData>;
  form: UseFormReturn<EmailFormData>;
}

function EmailEditor({ control, form }: IEmailEditor) {
  const bodyError = form.formState.errors.body;

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Escreva seu e-mail...",
      }),
    ],
    content: "",
  });

  return (
    <Controller
      name="body"
      control={control}
      render={({ field }) => {
        // sincroniza RHF → TipTap
        if (editor && field.value !== editor.getHTML()) {
          editor.commands.setContent(field.value || "");
        }

        // sincroniza TipTap → RHF
        editor?.on("update", () => {
          field.onChange(editor.getHTML());
        });

        return (
          <div className="p-4">
            <EditorContent
              editor={editor}
              className="
                min-h-[250px]
                rounded-xl
                bg-white/10 backdrop-blur-md
                border border-white/20
                p-4
                text-white
                prose prose-invert max-w-none
                focus:outline-none

                [&_.ProseMirror]:min-h-[200px]
                [&_.ProseMirror]:outline-none
                [&_.ProseMirror_p.is-editor-empty:first-child::before]:text-white/40
              "
            />

            {bodyError && (
              <p className="mt-1 text-sm text-red-400">
                {bodyError.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}


/* =======================
   ATTACHMENTS
======================= */
interface IAttachements {
  control: Control<EmailFormData>;
}

function Attachments({ control }: IAttachements) {
  return (
    <Controller
      name="attachments"
      control={control}
      render={({ field }) => {
        const files: File[] = field.value || [];

        function removeFile(index: number) {
          const updatedFiles = files.filter((_, i) => i !== index);
          field.onChange(updatedFiles);
        }

        return (
          <div className="space-y-3">
            {/* UPLOAD */}
            <label
              className="
                inline-flex items-center gap-2
                cursor-pointer
                px-4 py-2 rounded-lg
                bg-white/10 hover:bg-white/20
                border border-white/20
                backdrop-blur-md
                transition
                whitespace-nowrap
              "
            >
              📎 Anexar
              <input
                type="file"
                multiple
                hidden
                onChange={(e) =>
                  field.onChange([
                    ...files,
                    ...Array.from(e.target.files || []),
                  ])
                }
              />
            </label>

            {/* FILE LIST */}
            {files.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {files.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="
                      flex items-center gap-2
                      px-3 py-1.5 rounded-lg
                      bg-white/10
                      border border-white/20
                      backdrop-blur-md
                      text-xs
                    "
                  >
                    📄
                    <span className="max-w-[160px] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="
                        text-white/60
                        hover:text-red-400
                        transition
                      "
                      aria-label="Remover arquivo"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
