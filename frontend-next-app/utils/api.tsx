import { any } from "zod";
import { BACKEND_API } from "./constants";
export default async function apiAuthSignIn(
  credentials: Record<"email" | "password", string> | undefined
) {
  try {
    const response = await fetch(`${BACKEND_API}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials as any),
    });
    //if 401 unauthorized
    if (!response.ok) {
      return new Error("Invalid credentials");
    }
    const accessToken = await response.text();
    console.log(accessToken);
    console.log("credentials", credentials);
    return { accessToken, credentials };
  } catch (error) {
    // return { error: error.message };
    console.log("No connection to Backend",error);
    return error;
  }
}
export async function apiAuthSignUp(credentials: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    console.log(BACKEND_API);
    const response = await fetch(`${BACKEND_API}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    console.log("screds", credentials);
    if (!response.ok) {
      return new Error("Sign-up failed");
    }

    const data = await response.json();
    console.log("data", data);
    if (data.error) {
      return { error: data.message };
    }

    return data; // Return the response data on successful sign-up
  } catch (error) {
    console.log("No connection to Backend");
    return error;
  }
}

export const BAPI = process.env.BACKEND_SERVER as string;
export const Token = process.env.BEARER as string;


const API_KEY = process.env.API_KEY;

export async function fetchDataFromExternalApi() {
  try {
    const response = await fetch(`${BACKEND_API}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWlsMUBnbWFpbC5jb20iLCJpYXQiOjE3NDc5NTUzMjQsImV4cCI6MTc0Nzk1ODkyNH0.Pa4a6NdxxL--un9B_e_zArTYrRW2_iLAarfX7KSA-vU",
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("No connection to Backend fetchDataFromExternalApi");
    return error;
  }
}


