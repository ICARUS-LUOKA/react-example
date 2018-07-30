const asyncAction=(url,dispatch,type)=>{
    // dispatch({type:'view_loading',payload:true})
        fetch(
            url,
            {
            headers:{
                    'Accept':'application/json,text/plain,*/*',
                    'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
        ).then(
            (res)=>{
                return res.json()
            }
        ).then((res)=>{
            // dispatch({type:'view_loading',payload:true})
            dispatch({type:"update_special",payload:res})
        })
}

const asyncLogin = (url,dispatch,username,password,history)=>{
    setTimeout(() => {
        fetch(
            url,
           {
            credentials: 'include', //凭证
               method:'POST',
               headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
            },
               body:JSON.stringify({
                username: username,
                password: password,
              })
           }
        ).then(
            (res)=>{return res.json()}
        ).then((res)=>{
            if (res.error === 0) {
                dispatch({type:'User_login',payload:res.username})
                history.push('/user')
                return res.msg
            }else{
                return res.msg
            }
        })
    }, 1000);
}

const asyncRegister=(username,password,history)=>{
        fetch(
            'http://localhost:3000/register',
            {
                credentials: 'include', //凭证
                   method:'POST',
                   headers:{
                    'Accept':'application/json,text/plain,*/*',
                    'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                },
                   body:JSON.stringify({
                    username: username,
                    password: password,
                })
            }
        ).then(res=>res.json()).then(res=>{
            if(res.error==0){
                history.push('./login')
            }
        })
}
export  {asyncAction,asyncLogin,asyncRegister}