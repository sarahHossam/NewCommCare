import { Injectable } from "@angular/core";
import { Idepartment } from "src/app/shared/interfaces/idepartment";

@Injectable()
export class DepartmentService {
    private departments: Idepartment[];
    constructor() {
        this.departments = [
            {
                id: 1,
                name: 'Cardiology',
                briefDesc: 'it is a brief description about caradiology',
                detailedDesc: 'it is a detailed description about caradiology',
                photo: '../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            },
            {
                id: 2,
                name: 'Dental',
                briefDesc: 'it is a brief description about dental',
                detailedDesc: 'it is a detailed description about dental',
                photo: '../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            },
            {
                id: 3,
                name: 'Nutrition',
                briefDesc: 'it is a brief description about nutrition',
                detailedDesc: 'it is a detailed description about nutrition',
                photo: '../../../assets//img/demos/restaurant/blog/blog-restaurant-1.png'
            }];
    }

    public getAll(): Idepartment[] {

        return this.departments;
    }

    public getById(id: number): Idepartment {

        const index = this.departments.findIndex(a => a.id == id);
        return this.departments[index];
    }
    public add(dept: Idepartment) {
        
        this.departments.push(dept);
        console.log(this.departments);
    }
}