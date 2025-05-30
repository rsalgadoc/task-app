import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Task } from '@/lib/db';
import { deleteProduct } from './actions';

export function Product({ product }: { product: Task }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{product.id}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {product.state?.name}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{product.priority}</TableCell>
      <TableCell className="hidden md:table-cell">{product.description}</TableCell>
      <TableCell className="hidden md:table-cell">
        {product.type}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form name="deleteProduct" action={deleteProduct}>
                <input name="id" value={product.id!} type='hidden' />
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
