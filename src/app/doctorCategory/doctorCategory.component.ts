import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-doctorCategory',
  templateUrl: './doctorCategory.component.html',
  styleUrls: ['./doctorCategory.component.css']
})
export class DoctorCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  public imageSources: string[] = [
    'path to img1',
    'path to img2',
    'path to img3'
   
 ];
 
 

}
