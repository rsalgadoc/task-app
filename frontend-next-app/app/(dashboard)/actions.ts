'use server';

import { deleteProductById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData: FormData) {
  console.log("formData");
  console.log(formData);
   let id = Number(formData.get('id'));
   await deleteProductById(id);
   revalidatePath('/');
}
