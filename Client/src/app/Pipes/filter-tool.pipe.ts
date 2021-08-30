import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTool'
})
export class FilterToolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
