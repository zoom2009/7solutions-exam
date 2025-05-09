"use client"

import { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import getQueryClient from "./_functions/getQueryClient"

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider
      client={queryClient}
    >
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
