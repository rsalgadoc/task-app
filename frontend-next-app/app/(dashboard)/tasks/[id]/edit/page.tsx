import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { editTask, getTaskById } from '../../../actions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = Number(params.id);
    const task = await getTaskById(id);
  return (
      <Card>
          <CardHeader>
              <CardTitle>Editar Task</CardTitle>
              <CardDescription>View all customers and their orders.</CardDescription>
          </CardHeader>
          <CardContent>
              <form action={editTask} className="relative ml-auto flex-1 md:grow-0">
                  <input name="id" value={task.id!} type='hidden' />
                  <div>
                      <div className="mb-4">
                          <Input name="description" type="text" 
                              required={true} defaultValue={task.description}></Input>
                      </div>
                      <div className="mb-4">
                          <Input name="priority" type="text" 
                              required={true} defaultValue={task.priority}></Input>
                      </div>
                      <div className="mb-4">
                          <Input name="type" type="text" 
                              required={true} defaultValue={task.type}></Input>
                      </div>
                      <div className="mb-4">
                          <Button type="submit" className="cursor-pointer h-8 gap-1">Editar Task</Button>
                      </div>
                  </div>
              </form>
          </CardContent>
      </Card>
  );
}
