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
   const task: Task = {
      priority: String(formData.get('priority')),
      description: String(formData.get('description')),
      type: String(formData.get('type')),
      id: null,
      state: null,
      assigned: null
   };
   await createTaskDb(task);
   revalidatePath('/tasks/create/');
   redirect('/');
}