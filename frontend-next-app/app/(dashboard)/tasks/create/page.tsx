import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { createTask } from '../../actions';

export default function Page() {
  return (
      <Card>
          <CardHeader>
              <CardTitle>Add Task</CardTitle>
              <CardDescription>View all customers and their orders.</CardDescription>
          </CardHeader>
          <CardContent>
              <form action={createTask} className="relative ml-auto flex-1 md:grow-0">
                  <div>
                      <div className="mb-4">
                          <Input name="description" type="text" placeholder="Descripcion"
                              required={true}></Input>
                      </div>
                      <div className="mb-4">
                          <Input name="priority" type="text" placeholder="Prioridad"
                              required={true}></Input>
                      </div>
                      <div className="mb-4">
                          <Input name="type" type="text" placeholder="Tipo"
                              required={true}></Input>
                      </div>
                      <div className="mb-4">
                          <Button type="submit" className="cursor-pointer h-8 gap-1">Create Task</Button>
                      </div>
                  </div>
              </form>
          </CardContent>
      </Card>
  );
}
