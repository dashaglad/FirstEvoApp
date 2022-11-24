import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add5Pipe'
})
export class Add5PipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 5;
  }

}
