import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../services/firebaseConfig";

export const Logar = () => {

    const SignIn = styled.button`
        background-color: #222;
        font-size: 15px;
        color: #fff;
        width: 200px;
        height: 35px;
        border-radius: 6px;
    ` 
    const [SignInWithGoogle] = useSignInWithGoogle(auth);

    return(
      <SignIn 
      onClick={() =>{
        SignInWithGoogle()
      }} > Logar com o Google</SignIn>
    );
}