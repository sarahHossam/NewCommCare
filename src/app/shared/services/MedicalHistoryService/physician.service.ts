import { Injectable } from '@angular/core';
import { IPhysician } from '../../interfaces/IPhysician';

@Injectable()
export class PhysicianService {
    physician: IPhysician[] = [
        {
            date: '12/12/2016',
            hospitalName: 'Dar el-Fouad',
        },
        {
            date: '01/01/2017',
            hospitalName: 'Dar el-Salam',
        },
        {
            date: '02/01/2017',
            hospitalName: 'Helwan el-Aam',
        },
        {
            date: '03/01/2017',
            hospitalName: 'Hassapo',
        }
    ];

    getPhysicianById(index: number): IPhysician {
        return this.physician[index];
    }


}
