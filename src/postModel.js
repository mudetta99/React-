import { useEffect ,useState } from "react";

const postModel = (url)=> {

    const [ isWaiting, setIsWaiting ] = useState(true);
    const [ serverError, setServerError ] = useState(null);
    const [ posts, setPost ] = useState(null);

    useEffect( ()=> {
        setTimeout( ()=> {
            fetch(url)
                .then(  response => {
                    console.log(response.ok)
                    if ( !response.ok ){
                        throw Error('Can not connet to the server!.');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setPost(data);
                    setIsWaiting(false)
                }).catch(e => {
                    console.log(e.message);
                    setServerError(e.message);
                    setIsWaiting(false)
                });
        }, 2000);
        
    }, [url] );


    return { isWaiting, serverError, posts }
}

export default postModel;




