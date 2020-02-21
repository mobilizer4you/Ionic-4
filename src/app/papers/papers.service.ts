import { Injectable } from '@angular/core';
import { Paper } from './papers.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  BACKEND_DOMAIN: any = 'https://mycj.sitestack.co.uk/api';
  APIURL: any = this.BACKEND_DOMAIN + '/mgforms';
  
  private papers: Paper[] = [];
  private datas = [];
  constructor(private http: HttpClient) {
    this.papersData().subscribe((datas) => { 
      this.datas = datas;
      this.makeArray(this.datas);
    });
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
 
  papersData(): Observable<Paper[]> {
    return this.http
      .get<Paper[]>(this.APIURL)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  makeArray(datas:any) {
    return datas;
  }

  getPaper(id: string) {
    let str = this.makeArray(this.datas);
    let DataById;
    for(let i=0;i<str.length;i++)
    {
      if(str[i].id == id)
        DataById = str[i];
    }
    return DataById;
  }
}
