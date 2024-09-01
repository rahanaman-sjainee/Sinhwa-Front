import {LoginError} from "./LoginError";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function DoLogin(){
    return;
}
function DoTwitterLogin(){
    // const navigate = useNavigate();

    
    ///불가능 한 이유 react-router-dom에서 관리하는 경로여야 가능함
    // useEffect(() => {
    //     fetch('/api/getRedirectUrl')
    //         .then(response => response.text())
    //         .then(url => {
    //             navigate(url); // 내부 경로로 리다이렉트
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [navigate]);

    return fetch("api/login/twitter")
        .then(response =>{
            if(!response.ok){
                throw new LoginError();
            }
            return response.text();
        })
        .then(url =>{
            window.location.assign(url);
        });



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