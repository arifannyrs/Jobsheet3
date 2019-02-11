import { TableService } from './table.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Arifanny Ramadhan Sukma';
  alamat = 'Bunga Desember';
  tanggal = Date.now();
  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit() {
    this.hby = this.tableServ.getArifanny();
    
  }
}
