import { InMemoryDbService } from 'angular-in-memory-web-api';

export class StudentsDataService implements InMemoryDbService {
    createDb() {
        const students = [
            {
                id: 1, fullname: 'Mateo Castaño', photo: './assets/images/goku.png',
                grade1: 5, grade2: 4, grade3: 5, grade4: 5, grade5: 5, infoupdated: '2017/07/23'
            },
            {
                id: 2, fullname: 'Jose Castaño', photo: './assets/images/batman.png',
                grade1: 4, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/23'
            },
            {
                id: 3, fullname: 'Juan Castaño', photo: './assets/images/batman.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: 5, infoupdated: '2017/07/23'
            },
            {
                id: 4, fullname: 'Wilson Castaño', photo: './assets/images/batman.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/23'
            },
            {
                id: 5, fullname: 'Cesar Castaño', photo: '../assets/images/batman.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/23'
            },
            {
                id: 6, fullname: 'Ricardo', photo: './assets/images/batman.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: null, infoupdated: '2017/07/23'
            },
            {
                id: 7, fullname: 'Marcos Arenas', photo: './assets/images/goku.png',
                grade1: 1, grade2: 4, grade3: 5, grade4: 0, grade5: 4, infoupdated: '2017/07/23'
            }
        ];
        return { students };
    }
}
