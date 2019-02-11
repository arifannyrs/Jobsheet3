import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  CourseService(): any[]{
    throw new Error("Method not implemented.");
  }
  constructor() { }

  getArifanny(){
    return[
      {id:0, hobby:"Touring", ket:"Kegiatan ketempat tujuan dengan menggunakan motor"},
      {id:1, hobby:"Makan", ket:"Mencoba makanan yang belum pernah saya coba"},
      {id:2, hobby:"Tidur", ket:"Mimpi itu indah"}
    ]
  }
}
