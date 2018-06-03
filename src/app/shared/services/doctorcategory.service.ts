import { Injectable } from '@angular/core';
import {Category} from 'src/app/shared/interfaces/icategory'

@Injectable({
  providedIn: 'root'
})
export class DoctorcategoryService {
  private categories:Category[];

constructor() {
  this.categories=[
    {
        id:1,
        categoryname:'Internist',
    },
    {
        id:2,
        categoryname:'dentistdoctor',
    },
    {
        id:3,
        categoryname:'Dermatologist',      
    }
   
];
 }
 public getAll(): Category[] {
        
  return this.categories;
}
public getById(id:number):Category{
  const i=this.categories.findIndex(b=>b.id == id);
  return this.categories[i];
}



}
