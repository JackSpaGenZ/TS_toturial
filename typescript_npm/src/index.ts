class person {
   name : string = '';
   id : number = 0;            // defaut 

   getting() {
      return this.name + ' ' + this. id ;
   }
}

const Per1 : person = new person();
Per1.name = "Jack";
Per1.id = 1 ;
console.log(Per1.getting());
