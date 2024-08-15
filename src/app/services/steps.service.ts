  // user.service.ts
  import { Injectable } from '@angular/core';
import { iStep } from '../interfaces/iStep.interface';

  @Injectable({
    providedIn: 'root',
  });

//   export class StepsService {
//     getUser(id: number): Observable<iStep> {
//       return this.http.get<User>(`/api/users/${id}`);
//     }
//   }