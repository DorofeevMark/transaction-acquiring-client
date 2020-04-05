import { Component, OnInit } from '@angular/core';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'date', 'response', 'bin', 'amount', 'merchantId'];
  public dataSource = [];
  constructor(private logService: LogService) {
    this.logService.getLogs().subscribe(logs => {
      console.log(logs);
      this.dataSource = logs;
    });
  }

  ngOnInit() {
  }

}
