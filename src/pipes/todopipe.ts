import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todopipe',
    standalone: true,
})
export class TodoPipe implements PipeTransform{
    transform(value: string): string{
        return `hello ${value} , Now Bye`;
    }
}
