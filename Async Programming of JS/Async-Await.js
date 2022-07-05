// it is anothe async behavior of Node.js

async function add(a,b){
    /**
    * I we are trying to call a function which we need to wait
    */
  console.log("A");
  const persons = await PersonModel.getAllPerson(); // We are waiting at this stage
  console.log("B");
  return persons ;
}


console.log("c");

add(5,6);  //executed asynchronouly

console.log("d");
