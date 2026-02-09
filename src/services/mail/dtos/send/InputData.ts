export interface ISendMailServiceInputData {
  subject: string;
  text: string;
  attachments: File[] | undefined;
}
