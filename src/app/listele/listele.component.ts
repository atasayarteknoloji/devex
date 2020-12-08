import {Component, OnInit} from '@angular/core';
import {BackEndService} from '../back-end.service';
import {Kioks} from '../Models/Kioks';
import {loadMessages, locale} from 'devextreme/localization';

import * as AspNetData from 'devextreme-aspnet-data-nojquery';
// @ts-ignore
import trMessages from 'devextreme/localization/messages/tr.json';

@Component({
  selector: 'app-listele',
  templateUrl: './listele.component.html',
  styleUrls: ['./listele.component.css']
})
export class ListeleComponent implements OnInit {
  veriler: Kioks[] = [];
  dataSource: any;
  private url: string;

  constructor(
    private api: BackEndService
  ) {
    this.dataSource = this.api.devx('kiokscontent');


  }

  ngOnInit() {
  }

}
