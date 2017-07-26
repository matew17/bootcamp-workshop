import { InMemoryDbService } from 'angular-in-memory-web-api';

export class StudentsDataService implements InMemoryDbService {
    createDb() {
        const students = [
            {
                id: 1, fullname: 'Android 18', photo: './assets/images/18.png',
                grade1: 5, grade2: 4, grade3: 5, grade4: 5, grade5: 5, infoupdated: '2017/07/26'
            },
            {
                id: 2, fullname: 'Bills', photo: './assets/images/bills.png',
                grade1: 4, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/23'
            },
            {
                id: 3, fullname: 'Majin Boo', photo: './assets/images/boo.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: 5, infoupdated: '2017/07/24'
            },
            {
                id: 4, fullname: 'Coronel Blue', photo: './assets/images/cap-blue.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/25'
            },
            {
                id: 5, fullname: 'Freeza', photo: './assets/images/freeza.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/21'
            },
            {
                id: 6, fullname: 'Goku (Kakaroto)', photo: './assets/images/goku.png',
                grade1: 5, grade2: 5, grade3: 5, grade4: 5, grade5: 5, infoupdated: '2017/07/22'
            },
            {
                id: 7, fullname: 'Picoro Daimaku', photo: './assets/images/picoro.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: 4, infoupdated: '2017/07/20'
            }
        ];
        return { students };
    }
}
