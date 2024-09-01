import React, {useEffect, useState} from "react";
import {LoginError} from "./LoginError";
import {DoLogin, DoTwitterLogin} from "./DoLogin";


function Login(){
    const [user,setUser] = useState(null);
    let data = null;
    useEffect(()=>{

        console.log("do authentication");
        getIdToken();
        if(user == null) return;
        console.log("do authentication");
        console.log(user);
        //로그인 시도 후에 일어나는 일들
        console.log("success");

    },[user]);

    function getIdToken(){
        const response = fetch('/api/login-token', {
            method: 'GET',
            credentials: 'include', // 쿠키를 포함하여 요청하기
        }).then(
            res =>{

                console.log("test");
                if(!res.ok){

                    console.log("test ok");
                    return;
                    // throw new Error("there si no Token");
                }

                const token = res.text(); // 서버에서 반환한 토큰을 텍스트로 읽어옴
                console.log(token);
                return token;
            }
        )
            .then(res=>setUser(res));
    }



    async function twitterLogin(){
        console.log("stat");
        let data = await DoTwitterLogin()
            .then(res => res)
        console.log(data);

        //setUser();
    }
    function test(){
        return fetch("/api/login-token",{
            method:'GET',
            credentials : "include"
        })
            .then(res=> {
                console.log(res);
                data= res;
                return res;
                }
            );
    }


    return (
      <div>
          <button onClick={twitterLogin}>
              twitter login
          </button>
          <button onClick={test}>
              test
          </button>
      </div>
    );

    // const [user, setUser] = setState({success : true,id : ""});
    //
    // function TryTwitterLogin(){
    //     return fetch("/api/test")
    //         .then(response =>{
    //             if(response.ok){
    //                return response.json();
    //             }
    //             else {
    //                 // 응답이 성공적이지 않을 때 (예: 404, 500 등의 에러)
    //                 throw new LoginError();
    //             }
    //         })
    //         .then(res =>{
    //             return res;
    //         })
    //         .catch(error =>{
    //             console.error();
    //             return {success : false,id : null};
    //         })
    // }
    //
    // useEffect(() => {
    //     console.log("changed");
    //
    // }, [user]);
    //
    // return (
    //     <div>
    //
    //     </div>
    // );

}

export default Login;