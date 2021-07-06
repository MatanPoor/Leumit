import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NumberService } from '../models/number.service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl = '';

  constructor(private httpClient:HttpClient) {
    this.serverUrl = environment.serverUrl;
   }

  getNumbersByString(): Promise<string>{
    let url = `${this.serverUrl}/NumbersString`;
    return this.httpClient.get<NumberService>(url).pipe(map(n => n.numbers)).toPromise();
  }
}
