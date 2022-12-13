import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentPipe'
})
export class StudentPipePipe implements PipeTransform {

  transform(
    value: any[],
    search: string
  ): any[] {
    if (!value) return [];
    if (!search) return value;
    search = search.toLowerCase();
    return value.filter((val) => {
      let rVal = (val.nomE.toLocaleLowerCase().includes(search)) ||  (val.prenomE.toLocaleLowerCase().includes(search)) ;

      return rVal;
    });
  }


}
