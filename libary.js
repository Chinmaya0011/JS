class Book{
    constructor(title=String,author=String,copies=Number){
        this.title=title;
        this.author=author;
        this.copies=copies;

    }
    getDetails(){
        return `Title: ${this.title}, Author: ${this.author}, Copies: ${this.copies}`;
    }
    borrowBook(){
        if(this.copies<=0){
            return "Sorry, no copies available"
        }
        this.copies-=1;
        return `${this.title} book borrow Sucessfully`;

    }
    returnBook(){
        this.copies+=1;
    }
}
let ikagi=new Book("Ikagi","CHinmaya",2);
let one=ikagi.getDetails()
let two=ikagi.borrowBook()
let three=ikagi.returnBook()
let again=ikagi.getDetails()
console.log(one, two, three, again)