export class Students {

    static createInstance(id, fullname, photo, grade1, grade2, grade3, grade4, grade5, average, infoupdated) {
        return new Students(id, fullname, photo, grade1, grade2, grade3, grade4, grade5, average, infoupdated);
    }
    constructor(
        public id: number,
        public fullname: string,
        public photo: string,
        public grade1: number,
        public grade2: number,
        public grade3: number,
        public grade4: number,
        public grade5: number,
        public average: number,
        public infoupdated: string
    ) {
        this.average = this.averageGrade();
    }

    averageGrade() {
        return (Number(this.grade1) + Number(this.grade2) + Number(this.grade3) + Number(this.grade4) + Number(this.grade5)) / 5
    }

    visualCues() {
        if (this.grade1 !== null && this.grade2 !== null && this.grade3 !== null && this.grade4 !== null && this.grade5 !== null) {
            return true
        } else {
            return false;
        }
    }

    deliveried() {
        let total = 0;
        total = this.grade1 !== null ? total + 1 : total + 0;
        total = this.grade2 !== null ? total + 1 : total + 0;
        total = this.grade3 !== null ? total + 1 : total + 0;
        total = this.grade4 !== null ? total + 1 : total + 0;
        total = this.grade5 !== null ? total + 1 : total + 0;
        return total;
    }

}
