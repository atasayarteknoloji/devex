import {Component, OnInit} from '@angular/core';
import {loadMessages, locale} from 'devextreme/localization';

import * as AspNetData from 'devextreme-aspnet-data-nojquery';
// @ts-ignore
import trMessages from 'devextreme/localization/messages/tr.json';
import {BackEndService} from '../back-end.service';

@Component({
  selector: 'app-listele2',
  templateUrl: './listele2.component.html',
  styleUrls: ['./listele2.component.css']
})
export class Listele2Component implements OnInit {
  veriKaynagi: any;
  kiokses : any;
  url = 'http://192.168.1.230:8182/api';
  dontAddCols = [
    'id'
  ];
  constructor(
    private  api: BackEndService
  ) {
    this.customizeItem = this.customizeItem.bind(this);
    this.veriKaynagi = this.api.devx('kiokscontent');
    this.kiokses = this.api.devx('kioks');
  }

  customizeItem(item: any) {
    if (this.dontAddCols.some(s => s.includes(item.dataField))) {
      item.visible = false;
    }
  }

  ngOnInit() {
  }

}
