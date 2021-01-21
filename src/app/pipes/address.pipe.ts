import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(value: any): unknown {
    console.log(value);
    return `${value.country}, ${value.city}, ${value.state}, ${value.street}`;
  }
}
