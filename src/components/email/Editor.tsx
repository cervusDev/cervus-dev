import { Controller, type Control, type UseFormReturn } from "react-hook-form";
import type { EmailFormData } from "./Composer";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";

interface IEmailEditor {
  control: Control<EmailFormData>;
  form: UseFormReturn<EmailFormData>;
}

export function EmailEditor({ control, form }: IEmailEditor) {
  const bodyError = form.formState.errors.text;

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
      name="text"
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
              <p className="mt-1 text-sm text-red-400">{bodyError.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}
