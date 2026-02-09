import {
  Controller,
  type Control,
} from "react-hook-form";
import type { EmailFormData } from "./Composer";

interface IAttachements {
  control: Control<EmailFormData>;
}

export function Attachments({ control }: IAttachements) {
  return (
    <Controller
      name="attachments"
      control={control}
      render={({ field, fieldState }) => {
        const files: File[] = field.value || [];
        const error = fieldState.error;

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

            {error && <p className="text-sm text-red-400">{error.message}</p>}
          </div>
        );
      }}
    />
  );
}
