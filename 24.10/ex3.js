class Student{
    constructor(name) {
        this.name = name
        this.grades = []
    }
    addGrade(grade) {
        this.grades.push(grade)
    }
    average() {
        let size = this.grades.length
        let sum = 0  
        if (this.grades.length === 0){
            return 0;
        }
        for(let i = 0;i < size;i++){
                sum += this.grades[i]
            }
            return sum / size
        }
}
const student1 = new Student("Ani")
student1.addGrade(9)
student1.addGrade(2)
student1.addGrade(7)
console.log(`Average score is՝ ${student1.average()}`)
