import { createFormData } from "@/utils/formDataFromBody";
import HttpClient from "../core/HttpClient";
import type { IMailRepository } from "./IMailRepository";
import type { ISendMailServiceInputData } from "./dtos/send/InputData";

interface ISendBodyResponse {
  subject: string;
  text: string;
  attachments: File[] | undefined;
  [key: string]: string | File[] | undefined;
}

class MailService implements IMailRepository {
  public async send(inputData: ISendMailServiceInputData): Promise<void> {
    const body: ISendBodyResponse = {
      attachments: inputData.attachments,
      subject: inputData.subject,
      text: inputData.text,
    };

    const formData = createFormData(body, ["attachments"]);

    await HttpClient.postFormData<void>({
      path: "/",
      formData,
    });
  }
}

export default new MailService();
