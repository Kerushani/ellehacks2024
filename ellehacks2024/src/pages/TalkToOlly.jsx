import { useState } from 'react';
import '../App.css';
import group2 from "../assets/group2.svg";
import user from "../assets/user.png";
import Typography from "@mui/material/Typography";

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message as ChatUIMessage, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = {
  role: "system", 
  content: "Explain like you are a mental health therapist and the person you are talking to is a homeless person in need of support"
};

const Message = ({ model }) => {
  const { message, sender } = model;
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0', justifyContent: sender === 'user' ? 'flex-end' : 'flex-start' }}>
      {sender === 'ChatGPT' && (
        <img
          src={group2}
          alt="Profile"
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '11px' }}
        />
      )}
      <ChatUIMessage model={model} />
      {sender === 'user' && (
        <img
          src={user}
          alt="Profile"
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginLeft: '8px' }}
        />
      )}
    </div>
  );
};

function TalkToOlly() {
    const [messages, setMessages] = useState([
        {
          message: "Hello, I'm Ollie! How can I help you?",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        setMessages(newMessages);
    
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
          let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
          return { role, content: messageObject.message };
        });
    
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [ systemMessage, ...apiMessages ]
        };
    
        await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => data.json())
          .then((data) => {
            setMessages([...chatMessages, {
              message: data.choices[0].message.content,
              sender: "ChatGPT"
            }]);
            setIsTyping(false);
          });
      }
    
      return (
        <div className="App">
          <div className='chatbox-container'>
            <Typography variant="h4" style={{ fontFamily: 'Roboto' }}>Chat With Ollie</Typography> 
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "700px", width: "100%", marginTop: "20px" }}>
              <div style={{ position: "relative", height: "800px", width: "100%" }}>
                <MainContainer>
                  <ChatContainer>
                    <MessageList
                      scrollBehavior="smooth"
                      typingIndicator={isTyping ? <TypingIndicator content="Ollie is typing" /> : null}
                    >
                      {messages.map((message, i) => {
                        return (
                          <Message
                            key={i}
                            model={message}
                          />
                        );
                      })}
                    </MessageList>
                    <MessageInput placeholder="Type message here" onSend={handleSend} />
                  </ChatContainer>
                </MainContainer>
              </div>
            </div>
          </div>
        </div>
      );
}

export default TalkToOlly;