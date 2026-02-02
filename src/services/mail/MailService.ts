import HttpClient from "../core/HttpClient";
import type { IMailRepository } from "./IMailRepository";
import type { ISendMailServiceInputData } from "./dtos/send/InputData";

interface ISendBodyResponse {
  email: string;
}

export class MailService implements IMailRepository {
  public async send(inputData: ISendMailServiceInputData): Promise<void> {
    await HttpClient.post<void, ISendBodyResponse>({
      path: "/",
      body: {
        email: inputData.email,
      },
    });
  }
}
