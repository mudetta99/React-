import { useState } from "react";

const Test2 = ()=> {

const name = "Mohammed";
// name = "Emad";    // ==> Error

let fName = "Mohammed";
fName = "Emad"; 

var sName = "Mohammed";
sName = "Emad"; 


const [firstName, setFirstname] = useState('Muhammed');
const [secondName, setSecondename] = useState('Emad');
const [Age, setAge] = useState(24);

var myWebSite = 'https://www.google.co.uk/';

const changeName = ()=> {

    setFirstname('Omar');
    setSecondename('Ahmed');
    setAge(13);

}

return (

    <div className="container">
        <h1> {name} </h1>
        <h1> {fName} </h1>
        <h1> {sName} </h1>
        <hr/><hr/>

        <h1> {firstName} </h1>
        <h1> {secondName} </h1>
        <h1> {Age} </h1>

        <button type="button" onClick={changeName} className="btn btn-warning" > Click </button>
        <hr/><hr/>
        <br/>

        <a className="btn btn-success" target="_blank" href={myWebSite}> google </a>
    </div>

)


}


export default Test2;