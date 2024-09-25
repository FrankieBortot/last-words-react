import './App.css';
import {content} from './conversations/intro.js';


function App() {
  return (
    <div className="App">
     
      <Section content={content} />
    </div>
  );
}

function Section({content}) {
  if (content.type === "e-mail") {
    return <EMail content={content} />
  }
  
  if ((content.type === "liveTalk")) {
    return <LiveTalk content={content} />
  }

  if ((content.type === "textMessages")) {
    return <TextMessages content={content} />
  }

}

function LiveTalk() {

}



function EMail({content}) {
  const emailBody = content.body.map((line) => 
  <p>{line}</p>);

  function EMailHeader () {

  }

  function EMailBody ({attachment}, {body}) {
    
    return <>{body}</>;
  }

  return (
    <div>
      <EMailHeader />
      <EMailBody attachment={content.attachment} body={emailBody} />

    </div>
  )
  
}

function TextMessages() {

}

export default App;
