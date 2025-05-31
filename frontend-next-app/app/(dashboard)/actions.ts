'use server';

import { deleteProductById,Task,createTaskDb, State, Assigned, getTaskByIdDb, updateTaskDb } from '@/lib/db';
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


export async function editTask(formData: FormData) {
   let idFrom = Number(formData.get('id'));
   const task: Task = {
      priority: String(formData.get('priority')),
      description: String(formData.get('description')),
      type: String(formData.get('type')),
      id: idFrom,
      state: null,
      assigned: null
   };
   await updateTaskDb(task);
   revalidatePath('/');
   redirect('/');
}


export async function getTaskById(id: number) {
   return await getTaskByIdDb(id);
}