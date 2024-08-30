
function DoLogin(){
    return;
}
function DoTwitterLogin(){
    return fetch("api/login/twitter",{
        method:'GET',
        credentials : "include"
    })
        .then( response =>{
            if(response.status === 302){
                console.log("a");
            }
            if(response.redirected){
                console.log("redirect");
            }
        })


    // return fetch("/api/login/twitter")
    //     .then(response =>{
    //         if(response.ok){
    //             return response.json();
    //         }
    //         // else {
    //         //     throw new LoginError(response.json());
    //         // }
    //     })
    //     .then( res =>{
    //         return res;
    //     });
}



export {DoLogin, DoTwitterLogin};