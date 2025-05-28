import SignInForm from "./signInForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader} from '@/components/ui/card';
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
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter>
          <div>
            <div className="flex">
              <p><b>Email: </b>  mail1@gmail.com</p>
            </div>
            <div className="flex">
              <p><b>Password:</b>  testpass</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>

  );
}



