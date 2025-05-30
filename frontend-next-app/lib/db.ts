import 'server-only';

import {
  pgEnum} from 'drizzle-orm/pg-core';
import {createTaskFromExternalApi, deleteProductByIdFromExternalApi, getProductsFromExternalApi} from "./../utils/api";
export const db = null;

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export interface Task {
  id: number | null;
  state: State | null;
  priority: string;
  description: string;
  type: string;
  assigned: Assigned | null;
}
export interface State {
  id: number;
  name: string | null;
}
export interface Assigned {
  id: number;
  fullName: string | null;
  email: string | null;
  password: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  enabled: boolean | null;
  accountNonLocked: boolean | null;
  accountNonExpired: boolean | null;
  credentialsNonExpired: boolean | null;
  username: string | null;
  authorities?: (null)[] | null;
}


export async function getProducts(
  search: string,
  offset: number
): Promise<{
  tasks: Task[];
  newOffset: number | null;
  totalProducts: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return { tasks: [], newOffset: null, totalProducts: 0 };
  }

  if (offset === null) {
    return { tasks: [], newOffset: null, totalProducts: 0 };
  }
  const data =  await getProductsFromExternalApi();
  if(data==null){
    return { tasks: [], newOffset: null, totalProducts: 0 };
  }
  var length = data.length;
  let newOffset = length >= 10 ? offset + 10 : null;

  return {
    tasks: data,
    newOffset,
    totalProducts: length
  };
}

export async function deleteProductById(id: number) {
  await deleteProductByIdFromExternalApi(id);
}

export async function createTaskDb(task: Task) {
 await createTaskFromExternalApi(task);
}
