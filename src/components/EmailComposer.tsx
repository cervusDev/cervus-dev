import * as Dialog from "@radix-ui/react-dialog";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useState } from "react";

/* =======================
   EMAIL COMPOSER
======================= */

export function EmailComposer() {
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
          {/* HEADER */}
          <header className="
            p-4 border-b border-white/10
            sticky top-0 z-10
            bg-white/10 backdrop-blur-xl
          ">
            <input
              placeholder="Assunto"
              className="
                w-full bg-transparent
                text-lg font-medium
                placeholder:text-white/50
                outline-none
                focus:border-white/40
              "
            />
          </header>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto">
            <Recipients />
            <EmailEditor />
          </div>

          {/* FOOTER */}
          <footer className="
            p-4 border-t border-white/10
            space-y-4
            sticky bottom-0 z-10
            bg-white/10 backdrop-blur-xl
          ">
            {/* DISCLAIMER */}
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-white/80">Atenção:</strong>{" "}
              Este espaço tem como objetivo a elaboração de uma proposta
              de projeto. As informações enviadas serão utilizadas
              exclusivamente para análise e contato comercial.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <Attachments />

              <div className="flex justify-end gap-3">
                <Dialog.Close asChild>
                  <button
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/* =======================
   EDITOR
======================= */

function EmailEditor() {
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
    </div>
  );
}

/* =======================
   RECIPIENTS
======================= */

function Recipients() {
  return (
    <div className="p-4 space-y-2">
      <GlassInput placeholder="Para" />
      <GlassInput placeholder="Cc" />
      <GlassInput placeholder="Bcc" />
    </div>
  );
}

/* =======================
   ATTACHMENTS
======================= */

function Attachments() {
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.target.files;
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-3">
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
        📎 <span className="text-sm">Anexar arquivo</span>
        <input type="file" multiple hidden onChange={handleFiles} />
      </label>

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
              <span className="max-w-[180px] truncate">{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =======================
   GLASS INPUT
======================= */

function GlassInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="
        w-full bg-transparent
        px-1 py-2
        text-white
        placeholder:text-white/50
        outline-none
        border-b border-white/10
        focus:border-white/40
        transition-colors
      "
    />
  );
}
