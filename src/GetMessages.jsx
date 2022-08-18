import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
function GetMessages() {
  const [messageList, setMessageList] = useState("");
  
    
    useEffect(() => {
      fetch("http://127.0.0.1:5000/get")
      .then(response => response.json())
      .then(data => setMessageList(data))
      .catch(err=>console.log(err));
    }, [1]);

  let x=0
return (

    <>
    
    {messageList && messageList.map(message => (
          <MessageCard key={x+=1} messageList={message} />
   ))}

 </>   
)
}






export default (GetMessages)
