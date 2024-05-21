import { auth } from "../services/firebaseConfig";
import styled from "styled-components";

export const Deslogar = () => {
    
    const SignOut = styled.button`
        background-color: #222;
        font-size: 15px;
        color: #fff;
        width: 200px;
        height: 35px;
        border-radius: 6px;
    ` 
    return(
        auth.currentUser && (
        <SignOut onClick={() =>{
            auth.signOut()
        }}>
            Sair
        </SignOut>
        )
    );
}