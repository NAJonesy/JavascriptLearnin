import React from 'react';
//import 'myFunction()' from 'https://www.w3schools.com/js/myScript1.js';
// const style = {
//     footer: {
//         backgroundColor: white,
//     },

//   body: {
//     backgroundColor : 8800,
//   },
//   h1: {
//     backgroundColor: 8723,
//   },
//   p: {
//     text: white,
//     weight: bold,
//   },
//   button: {
//     backgroundColor: aqua,
//     color: black,
//     size: 1,
//     weight: bolder,

//   }

// };

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
function testline(){
  //document.getElementById("line1").innerHTML=
  document.write('T.E.S.T.I.N.G.');
};

function testChangeVar(fname,lname){
    new person(),
    person.firstName = fname,
    person.lastName = lname;
    return person.fullName();
};

function myFunction(){
    document.getElementById("demo").innerText = 'Changed! Noice!';
};

function changeText(){
    document.getElementById("line1").innerText = "Changing Line 1 works";
  };