import { Input } from 'antd';
import React, { useCallback, useContext, useState, useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import styled from 'styled-components'
import { DefaultButton } from '../components/button/DefaultButton';
import { DefaultInputForm } from '../components/input/DefaultInputForm';
import PageLayout from '../layout/Header';
import { getCurrentUser, signIn } from '../lib/api/adminAuth';
import { AuthContext } from '../App';

export const SignInScreen = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: any) => {

    console.log(data)
    try {
      const res: any = await signIn(data)

      console.log(res)
      if (res.status === 200) {
        console.log(res.headers["access-token"])
        // ログインに成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])
  
        setIsSignedIn(true)
        console.log(res.data.data)
        setCurrentUser(res.data.data)
  
        navigate("/")
  
        console.log("Signed in successfully!")
      } else {
        setAlertMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setAlertMessageOpen(true)
    }
  
  }


  const LoginInput = styled(Input)`
    font-size: 18px;
    width: 360px;
    height: 48px;
    margin: 16px auto;
    text-align: center;
  `

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#dddddd",
    }}>
      <div style={{
        width: "64%",
        minWidth: "320px",
        maxWidth: "480px",
        height: "560px",
        border: "none",
        borderRadius: 10,
        background: "#f9f9f9",
        textAlign: "center"
      }}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{
              textAlign: "center",
              fontFamily: "Noto Sans JP",
              fontSize: "40px",
              margin: "40px auto"
            }}>アプリ名</h1>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <LoginInput onChange={onChange} value={value} placeholder={"email"} />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LoginInput type={"password"} onChange={onChange} value={value} placeholder={"password"} />
              )}
            />
            <DefaultButton type={"submit"} onClick={()=> console.log("submit")} width={"360px"} height={"48px"} children={"Login"} color={"green"} />
            <div style={{ textAlign: "center", marginTop: "8px" }}><Link to="/SignUp">メールアドレスを忘れた場合</Link></div>
            <hr style={{width: "90%", margin: "16px auto"}} />
            <div style={{ textAlign: "center", marginTop: "8px" }}><Link to="/SignUp">アカウント新規作成</Link></div>
          </form>
      </div>
    </div>

  );
}
