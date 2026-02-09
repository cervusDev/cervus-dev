import { env } from "@/config/env";
import HttpClientError from "@/errors/HttpClientError";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  isAxiosError,
  type RawAxiosRequestHeaders,
} from "axios";

class HttpClient {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
    this.instance.interceptors.response.use(
      (success) => {
        return success;
      },
      (error) => {
        if (error.response) {
          // const { status } = error.response;

          // if (status === 401) {
          // }

          return Promise.reject(error);
        }

        return Promise.reject(error);
      },
    );
  }

  public async get<T = unknown, S = unknown>({
    params,
    path,
  }: {
    params?: S;
    path: string;
  }): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.get<T>(path, {
        params,
      });
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        throw new HttpClientError({
          body: err.response?.data,
          message: `${err.response?.status} = ${err.response?.statusText}`,
          response: err.response,
          status: err.response?.status || 400,
          url: err.response?.config.baseURL,
        });
      }
      throw new Error("Erro não tratado");
    }
  }

  public async post<T, S = unknown>({
    body,
    headers,
    path,
  }: {
    body?: S;
    headers?: RawAxiosRequestHeaders;
    path: string;
  }): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.post<T>(path, body, { headers });
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        throw new HttpClientError({
          body: err.response?.data,
          message: `${err.response?.status} = ${err.response?.statusText}`,
          response: err.response,
          status: err.response?.status || 400,
        });
      }
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error("Erro não tratado");
    }
  }

  public async put<T, S = unknown, R = unknown>({
    body,
    params,
    path,
  }: {
    body?: S;
    params?: R;
    path: string;
  }): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.put<T>(path, body, {
        params,
      });
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        throw new HttpClientError({
          body: err.response?.data,
          message: `${err.response?.status} = ${err.response?.statusText}`,
          response: err.response,
          status: err.response?.status || 400,
        });
      }
      throw new Error("Erro não tratado");
    }
  }

  public async delete<T, S = unknown>({
    params,
    path,
  }: {
    params?: S;
    path: string;
  }): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance.delete<T>(path, {
        params,
      });
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        throw new HttpClientError({
          body: err.response?.data,
          message: `${err.response?.status} = ${err.response?.statusText}`,
          response: err.response,
          status: err.response?.status || 400,
        });
      }
      throw new Error("Erro não tratado");
    }
  }

  public async postFormData<T = unknown>({
    path,
    formData,
    headers,
  }: {
    path: string;
    formData: FormData;
    headers?: Record<string, string>;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        ...headers,
      },
    };

    const response = await this.instance.post<T>(path, formData, config);
    return response.data;
  }

  public removeBearerToken(): void {
    this.instance.defaults.headers.common.Authorization = "";
  }

  public setBearerToken(token: string): void {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default new HttpClient(env.apiEmailUrl);
