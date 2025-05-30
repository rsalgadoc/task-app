'use server';

import { deleteProductById,Task,createTaskDb, State, Assigned } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteProduct(formData: FormData) {
   let id = Number(formData.get('id'));
   await deleteProductById(id);
   revalidatePath('/');
}


export async function createTask(formData: FormData) {
   const stateNew: State = {
      id: 1,
      name: null
   }
   
   const assignedNew: Assigned = {
      id: 1,
      fullName: null,
      email: null,
      password: null,
      createdAt: null,
      updatedAt: null,
      enabled: null,
      accountNonLocked: null,
      accountNonExpired: null,
      credentialsNonExpired: null,
      username: null
   }

   const task: Task = {
      priority: String(formData.get('priority')),
      description: String(formData.get('description')),
      type: String(formData.get('type')),
      state: stateNew,
      assigned: assignedNew,
      id: null
   };
   await createTaskDb(task);
   revalidatePath('/tasks/create/');
   redirect('/');
}