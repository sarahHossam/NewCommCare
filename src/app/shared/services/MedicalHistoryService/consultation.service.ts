import { Injectable } from '@angular/core';
import { IConsultation } from '../../interfaces/IConsultation';


@Injectable()
export class ConsultationService {
    consultation: IConsultation[] = [
        {
            date: '01/11/2016',
            hospitalName: 'Dar el-Fouad',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '12/11/2016',
            hospitalName: 'Helwan el-Aam',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '20/11/2016',
            hospitalName: 'el-Aser el-eni',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '25/11/2016',
            hospitalName: 'Dar el-Salam',
            toDepartment: 'Analysis',
            fromDepartment: 'Linear Algebra',
            reasonForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            responseForRequest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        }
    ];

    getConsultationById(index: number): IConsultation {
        return this.consultation[index];
    }


}
