import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(value: any): unknown {
    return `${value.firstName} ${value.lastName}`;
  }
}
