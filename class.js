class Student{
    constructor(name=String,age=Number,college=String) {
        this.name=name;
        this.age=age;
        this.college=college;
    }
    studentDetails(){
        return this.name+" "+this.college;
    }
    getAge(){
        return this.age;
    }
}
let chinmaya=new Student("Chinmaya Kumar Mishra",25,"PMEC");
console.log(chinmaya.age)