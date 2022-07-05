// Hoisting  => allow functions to be safely executed before it is declared
// we are calling before declaring
details();

function details(){
    console.log("hello i  am Dipankar Bhoumuk")
}

/*
as js is a complied and interpreter language it first make a memory creation stage 
there all the function and variable store then it executetion start
so wher execute it has already a function 
so that it print without sending  an error
*/
