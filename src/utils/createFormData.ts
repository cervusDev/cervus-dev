// types.ts
export interface IFormDataConvertible {
  [key: string]: string | File | File[] | undefined;
}

// utils/formData.ts
/**
 * Converte um objeto com strings e arquivos em FormData.
 * @param data - objeto contendo strings ou arquivos (File[])
 * @param fileFieldNames - lista opcional de campos que são arquivos
 */
export function createFormData<T extends IFormDataConvertible>(
  data: T,
  fileFieldNames: (keyof T)[] = [],
): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (fileFieldNames.includes(key as keyof T)) {
      if (Array.isArray(value)) {
        value.forEach((file) => formData.append(key, file));
      } else {
        formData.append(key, value as File);
      }
    } else {
      formData.append(key, String(value));
    }
  });

  return formData;
}
