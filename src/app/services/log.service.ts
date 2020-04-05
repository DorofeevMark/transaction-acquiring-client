import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentModel} from '../models/Payment.model';
import {map} from 'rxjs/operators';
import {LogModel} from '../models/Log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpService: HttpClient) { }

  public getLogs(): Observable<LogModel[]> {
    return this.httpService.get<any[]>(environment.apiUrl + 'getLogs')
      .pipe(
        map(logs => logs.map(log => new LogModel(log.paymentInfo, log.id, log.response, log.date)))
      );
  }
}
