import { USERS  } from "../interfaces/users";
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seachFilterTable'
})
export class SeachFilterTablePipe implements PipeTransform {

  transform(Users: USERS[], searchText: string): USERS[] {
    console.log(searchText)

    if (!searchText || searchText.length === 0) {
      console.log('nada');
      return Users;
    }

    if (Users.length === 0) {
      console.log('nada2');
      return Users;
    }

    console.log('valor')
    return Users.filter(user =>
      user[1].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[2].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[3].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[4].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[5].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[6].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      user[7].data.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
  }

}
