"use client";

 import { SessionProvider as Provider } from "next-auth/react";

export function SessionProvider({
  children,
  session,
  basePath
}: {
  children: React.ReactNode;
  session : any;
  basePath : any;
}) {
  return <Provider basePath={basePath} session={session}>{children}</Provider>;
}