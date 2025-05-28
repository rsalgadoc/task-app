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
  console.log("SessionProvider ********");
  console.log({session});
  console.log("SessionProvider ********");
  // if(session == null){
  //   return
  // }
  return <Provider basePath={basePath} session={session}>{children}</Provider>;
}