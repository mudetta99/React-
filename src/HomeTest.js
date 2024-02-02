const HomeTest = ()=> {

    // const clickMe = ()=>{

    //     console.log('clicked');
    // }


    const clickMe = (e)=>{

        console.log(e);
    }


    // const clickMeWithParams = (fName)=> {

    //     console.log('My First Name is: ' +fName)
    // }


    
    const clickMeWithParams = (fName, e)=> {

        console.log('My First Name is: ' + fName + e)
    }

    const clickMeWithTwoParams = (firstName, secondName)=> {

        console.log('my first name is: ' +firstName+ ' and my second name is: ' +secondName);
    }

    return (

        <div className="container">

            <h1>Welcome</h1>

            <button className="btn btn-danger" onClick={clickMe} > Click </button>

            {/* <button className="btn btn-danger" onClick={()=> clickMeWithParams('Mohammed')} > click Me With Params </button> */}


            <button className="btn btn-danger" onClick={(e)=> clickMeWithParams('Mohammed', e)} > click Me With Params </button>



            <button className="btn btn-danger" onClick={()=> clickMeWithTwoParams("Muhammed", 'Emad')} > click Me With Two Params </button>


        </div>


)


}

export default HomeTest;