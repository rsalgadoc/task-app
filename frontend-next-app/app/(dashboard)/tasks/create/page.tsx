import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';

export default function CustomersPage() {
  return (
      <Card>
          <CardHeader>
              <CardTitle>Add Task</CardTitle>
              <CardDescription>View all customers and their orders.</CardDescription>
          </CardHeader>
          <CardContent>
              <div>
                  <div className="mb-4">
                      <Input name="hola" type="text" placeholder="Descripcion"
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
          </CardContent>
      </Card>
  );
}
