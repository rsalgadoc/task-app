"use client";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error');
  return <p className="text-red-500 text-sm">{error}</p>
}

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/frontend-next-app",
        redirect: true,
      });

    }
    catch (error) {
      setError("Invalid credentials");
    }
  }
  
  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
        <ToastContainer autoClose={3000} hideProgressBar />
      </form>
      <Suspense>
        <Search />
      </Suspense>
    </div>
  );
}
