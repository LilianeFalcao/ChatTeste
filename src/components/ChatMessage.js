import { auth } from "../services/firebaseConfig";
import styled from "styled-components";

export const ChatMessage = (props) => {

  const Fotinhas = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  `

  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`${messageClass}`}>
      <Fotinhas src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  );
};
