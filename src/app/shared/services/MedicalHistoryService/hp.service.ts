import { Injectable } from '@angular/core';
import { IHP } from '../../interfaces/IHp';

@Injectable()
export class HPService {
    hp: IHP[] = [
        {
            date: '12/12/2016',
            hospitalName: 'Dar el-Fouad',
            Current: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            relevantFindings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            activeProblems: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            Plan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '01/01/2017',
            hospitalName: 'Dar el-Salam',
            Current: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            relevantFindings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            activeProblems: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            Plan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '02/01/2017',
            hospitalName: 'Helwan el-Aam',
            Current: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            relevantFindings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            activeProblems: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            Plan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        },
        {
            date: '03/01/2017',
            hospitalName: 'Hassapo',
            Current: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            relevantFindings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            activeProblems: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed',
            Plan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitsed'
        }
    ];

    getHpById(index: number): IHP {
        return this.hp[index];
    }


}
