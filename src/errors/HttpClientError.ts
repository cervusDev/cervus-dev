interface HttpClientErrorProps {
  body?: unknown;
  message?: string;
  response?: unknown;
  status?: number;
  url?: string;
}

class HttpClientError extends Error {
  public readonly body?: unknown;
  public readonly response?: unknown;
  public readonly status: number;
  public readonly url?: string;

  constructor({ body, message, response, status, url }: HttpClientErrorProps) {
    // mensagem segura e informativa
    const safeMessage =
      message ||
      (typeof body === 'object' && body && 'message' in body
        ? (body as { message: string }).message
        : `Erro HTTP ${status ?? 'desconhecido'} (${url ?? 'URL desconhecida'})`);

    super(safeMessage);

    this.name = 'HttpClientError';
    this.body = body;
    this.response = response;
    this.status = status ?? 500;
    this.url = url;
  }
}

export default HttpClientError;
