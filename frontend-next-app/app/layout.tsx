import './globals.css';
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session} basePath="/frontend-next-app/api/auth">
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}