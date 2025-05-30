import { Task } from '@/lib/db';
import { getServerAuthSession } from './../app/auth';
import { BACKEND_API } from "./constants";
export default async function apiAuthSignIn(credentials: {
  email: string;
  password: string;
}) {
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
      throw new Error('Invalid credentials');
    }
    const accessToken = await response.text();
    return  accessToken ;
  } catch (error) {
    console.log("No connection to Backend",error);
    throw error;
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

export async function getProductsFromExternalApi() {
  try {
    let session = await getServerAuthSession() as any;
    const response = await fetch(`${BACKEND_API}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + session.accessToken,
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("No connection to Backend getProductsFromExternalApi");
    return null;
  }
}

export async function deleteProductByIdFromExternalApi(id: number) {
  try {
    let session = await getServerAuthSession() as any;
    const response = await fetch(`${BACKEND_API}/tasks/`+id, {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + session.accessToken,
      }
    });
    if (!response.ok) {
      throw new Error('Failed to delete data');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.log("No connection to Backend deleteProductByIdFromExternalApi");
    return null;
  }
}


export async function createTaskFromExternalApi(task: Task) {
  try {
    let session = await getServerAuthSession() as any;
    const response = await fetch(`${BACKEND_API}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + session.accessToken,
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.log("No connection to Backend createTaskFromExternalApi");
    return null;
  }
}


