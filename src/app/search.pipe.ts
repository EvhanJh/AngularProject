import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(liste: any, search: string) {
    search = search.toLowerCase();
    let res = liste.filter((item: any) => {
      if (item.nom.toLowerCase().indexOf(search) > -1 || item?.category?.toLowerCase()?.indexOf(search) > -1) return item;
      else return null;
    });
    return res;
  }
}
