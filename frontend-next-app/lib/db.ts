import 'server-only';

import {
  pgEnum} from 'drizzle-orm/pg-core';
import {fetchDataFromExternalApi} from "./../utils/api";
import { log } from 'console';

export const db = null;

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export interface Task {
  id: number;
  state: State;
  priority: string;
  description: string;
  type: string;
  assigned: Assigned;
}
export interface State {
  id: number;
  name: string;
}
export interface Assigned {
  id: number;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  username: string;
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

  const data =  await fetchDataFromExternalApi();
  var length = data.length;
  let newOffset = length >= 10 ? offset + 10 : null;

  return {
    tasks: data,
    newOffset,
    totalProducts: length
  };
}

export async function deleteProductById(id: number) {
  
}
