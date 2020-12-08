import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Kioks} from './Models/Kioks';
import {loadMessages, locale} from 'devextreme/localization';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
// @ts-ignore
import trMessages from 'devextreme/localization/messages/tr.json';

@Injectable()
export class BackEndService {
  url = 'http://192.168.1.230:8182/api/';
  dataSource: any;

  constructor(
    private http: HttpClient
  ) {
  }

  getir(): Observable<Kioks[]> {
    return this.http.get<Kioks[]>(this.url + 'kioks');
  }

  devx(degisker: string) {
    loadMessages(trMessages);
    locale(navigator.language);
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url + degisker,
      insertUrl: this.url + degisker,
      updateUrl: this.url + degisker,
      // deleteUrl: this.url + '/kioks',
      onBeforeSend: function(method, ajaxOptions) {
        ajaxOptions.xhrFields = {withCredentials: false};
      }
    });
    return this.dataSource;
  }
}
