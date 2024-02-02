const Test = ()=> {

const clickMe = ()=> {

console.log("Let me alone");

}


const clickMeTwice = (fName, sName)=> {

    console.log ( "My First Name is: " + fName + " and My Second Name is: " +sName  );


}


const clickMee = (e)=> {

    console.log(e.target);
    
}
    
    
const clickMeTwicee = (fName, sName, e)=> {
    
    console.log ( "My First Name is: " + fName + " and My Second Name is: " +sName  + e);
    
    
}
    




    return (

        <div className="contaainer m-5">

            <h2>Test Page</h2>

            <br/>

            <button type="button" onClick={clickMe}  className="btn btn-dark"> Dark </button>

            <button type="button" onClick={()=> {clickMeTwice('Muhammed', 'Emad')}} className="btn btn-primary"> Twice </button>  

            <br/>

            <button type="button" onClick={clickMee}  className="btn btn-dark"> Second </button>

            <button type="button" onClick={(e)=> {clickMeTwicee('Muhammed', 'Emad', e)}} className="btn btn-primary"> Second </button>  


        </div>

    );
} 


export default Test;