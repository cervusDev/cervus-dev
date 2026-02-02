import type { ISendMailServiceInputData } from "./dtos/send/InputData";

export interface IMailRepository {
  send(inputData: ISendMailServiceInputData): Promise<void>;
}
