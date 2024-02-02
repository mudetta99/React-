import { useState } from "react";

const Abouttest = ()=>{

const [firstName, setFirstname] = useState('Muhammed');

const [secondname, setSecondname] = useState('Emad');

const changeName = ()=> {

    // setFirstname = 'Emad';  ==> Wrong
    setFirstname('Emad');
}


const backName = ()=> {
    setSecondname('Muhamed')
}




    return (
        
        <div>
            <h1> {firstName} </h1>
            <h1> {setFirstname} </h1>
            <h1> {secondname} </h1>
            <h1> {setSecondname} </h1>

            <button type="button" className="btn btn-danger" onClick={changeName} >Click</button>

            <button type="button" className="btn btn-warning" onClick={backName}>Clck</button>
        </div>
    )
}


export default Abouttest;