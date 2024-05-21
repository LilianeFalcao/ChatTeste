import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { auth, databaseApp } from "../services/firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ChatMessage } from "./ChatMessage";
import { useState } from "react";
import styled from "styled-components";

export const ChatRoom = () => {

  const Form = styled.form`
    display: flex;
    padding: 20px;
    background-color: #222;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `
  const TextInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  `
  const EnviaButton = styled.button`
    padding: 10px 20px;
    background-color: #213253;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
`
  const messagesRef = collection(databaseApp, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { photoURL, uid } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      uid,
      photoURL,
      createdAt: serverTimestamp()
    });
    setFormValue('')
    }

  return(
      <>
        <main>
        {messages &&
          messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
        </main>
        <Form onSubmit={sendMessage}>
          <TextInput
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <EnviaButton type="submit" disabled={!formValue}>Enviar</EnviaButton>
        </Form>
      </>
  );
}