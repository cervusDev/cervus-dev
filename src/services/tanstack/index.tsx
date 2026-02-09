import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface IQueryClientProvider {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const TanstackQueryClientProvider: React.FC<IQueryClientProvider> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
