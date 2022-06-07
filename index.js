function receivesAFunction(callback){
    console.log(callback())
}

function returnsANamedFunction(){
    return function Fn() {
        console.log("this is a named function");
      };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }
  