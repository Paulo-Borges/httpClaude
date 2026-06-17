import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User, UserService } from '../user-service';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { UserState } from '../user-state.interface';

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe],                   //com signal não precisa AsyncPipe 
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  private userService = inject(UserService);
  // Stream declarativa que gerencia o estado da tela com RxJS moderno
  public state$: Observable<UserState<User[]>> = this.userService.getUsers().pipe(
    map((users) => ({
      loading: false,
      data: users,
      error: null
    })),
    startWith({
      loading: true,
      data: null,
      error: null
    }),
    catchError((err) => {
      console.error('Erro na API:', err);
      return of({
        loading: false,
        data: null,
        error: 'Não foi possível carregar a lista de usuários. Tente novamente mais tarde.'
      });
    })
  );
}
