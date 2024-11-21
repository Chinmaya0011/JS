function Student(firstName,lastName,age){
    this.fullName=firstName+" "+lastName;
    this.age=age;
   

}

let chinmaya=new Student("Chinmaya","Mishra",25);
console.log(chinmaya.fullName)