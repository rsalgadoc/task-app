import SignInForm from "./signInForm";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
export const metadata = {
  title: "Login Page",
  description: "Login page for our app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
        </CardHeader>
        <CardFooter>
          <SignInForm />
        </CardFooter>
      </Card>
    </div>

  );
}



