import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(users:any,value:string){
    return value ? users.filter((item: { status: string; }) => item.status === value) : users;;
  }

}
