import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "./model/result";

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  fooBarQuixEndpoint = `${environment.api}/foo-bar-quix`;

  constructor(private http: HttpClient) {
  }

  convert(number: Number): Observable<Result> {
    return this.http.get<Result>(`${this.fooBarQuixEndpoint}/${number}`);
  }

}
