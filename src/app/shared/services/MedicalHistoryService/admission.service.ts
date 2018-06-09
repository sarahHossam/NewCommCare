import { Injectable } from '@angular/core';
import { IAdmission } from '../../interfaces/IAdmission';

@Injectable()
export class AdmissionService {
    admission: IAdmission[] = [
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

    getAdmissionById(index: number): IAdmission {
        return this.admission[index];
    }


}
