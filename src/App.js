import { useAuthState } from "react-firebase-hooks/auth";
import { Logar } from "./components/SignIn";
import { Deslogar } from "./components/SignOut";
import { auth } from "./services/firebaseConfig";
import { ChatRoom } from "./components/ChatRoom";
import styled from "styled-components";

export const App = () => {
  const [user] = useAuthState(auth);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    p {
      max-width: 150px;
      margin-bottom: 12px;
      margin-left: 25px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 25px;
      position: relative;
      color: white;
      text-align: center;
    }
    
    .message {
      display: flex;
      align-items: center;
    }
    
    .sent {
      flex-direction: row-reverse;
    }
    
    .sent p {
      color: white;
      background: #0b93f6;
      align-self: flex-end;
    }

    .received p {
      background: #e5e5ea;
      color: black;
      align-self: flex-start;
    }
    
    max-width: 600px;
    height: 80vh;
    background-color: #213253;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  `
  const ChatHeader = styled.header`
    padding: 20px;
    background-color: #222;
    color: white;
    text-align: center;
    margin-bottom: 2em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `
  return(
    <Container>
      <ChatHeader>
        <h1>Linn Chat</h1>
      </ChatHeader>
      <section>{user ? <ChatRoom/> : <Logar/> }</section>
      <Deslogar/>
    </Container>
  );

}