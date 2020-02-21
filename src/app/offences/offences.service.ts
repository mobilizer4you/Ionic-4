import { Injectable } from '@angular/core';
import { Offence } from './offence.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffencesService {
  BACKEND_DOMAIN: any = 'https://mycj.sitestack.co.uk/api';
  APIURL: any = this.BACKEND_DOMAIN + '/offences';
  
  private offences: Offence[] = [];

  constructor(private http: HttpClient) {
    this.offencesData().subscribe((offences) => { 
      this.offences = offences;
      this.makeArray(this.offences);
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

  offencesData(): Observable<Offence[]> {
    return this.http
      .get<Offence[]>(this.APIURL)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  makeArray(offences:any) {
    return offences;
  }

  getOffence(id: string) {
    let str = this.makeArray(this.offences);
    let DataById;
    for(let i=0;i<str.length;i++)
    {
      if(str[i].id == id)
        DataById = str[i];
    }
    return DataById;
  }
}
