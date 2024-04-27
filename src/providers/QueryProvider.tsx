"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const QueryProvider: FC<Props> = ({ children }) => {
  // male sure each request has its own cache
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
