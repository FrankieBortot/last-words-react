import './App.css';
import {intro} from './conversations/intro.js';


function App() {

  const displaySections = intro.map((section) => 
    <Section sectionContent={section} /> )

  return (
    <div className="App">
     {displaySections}
    </div>
  );
}

function Section({sectionContent}) {
  
  function SectionHeader ({title}) {
    return <div className="section-header">{title}</div>
  }

  if (sectionContent.type === "e-mail") {
    return (<>
    <SectionHeader title={sectionContent.title}/>
    <EMail emailContent={sectionContent} />
    </>)
  }
  
  if ((sectionContent.type === "liveTalk")) {
    return (<>
      <SectionHeader title={sectionContent.title}/>
      <LiveTalk talkContent={sectionContent} />
      </>)
  }

  if ((sectionContent.type === "textMessages")) {
    return (<>
      <SectionHeader title={sectionContent.title}/>
      <TextMessages textContent={sectionContent} />
      </>)
  }
  
}

function LiveTalk({talkContent}) {
const talkBubbles = talkContent.body.map((bubbleGroup) => {  
  
  if (bubbleGroup.speaker === "Frankie") {
    
    const lines = bubbleGroup.lines.map((line) => <TalkBubble bubbleText={line} /> );

    return <div className='Frankie'>{lines}</div>
  } else if (bubbleGroup.speaker === "Lusinda") {

    const lines = bubbleGroup.lines.map((line) => <TalkBubble bubbleText={line} /> );

    return <div className='Lusinda'>{lines}</div>
  } } );

  function TalkBubble ({bubbleText}) {
    return (
      <div className="bubble"> {bubbleText}
      </div>
    )
  }

  return <>{talkBubbles}</>
}

// function LiveTalk({talkContent}) {
//   const talkBubbles = talkContent.body.map((bubbleGroup) =>
//     {  if (bubbleGroup.speaker === "Frankie") {
  
//       const lines = bubbleGroup.lines.map((line) =>
//         <TalkBubble bubbleText={line} /> );
//        <div className='Frankie'>{bubbleGroup}</div>
//        } else if (bubbleGroup.speaker === "Lusinda") {
//       <div className='Lusinda'>
//         <TalkBubble bubbleText={bubbleGroup.bubbles}/>
//       </div> 
//       } 
//     }
//     );
  
//     function TalkBubble ({bubbleText}) {
//       return (
//         <div className="bubble">
//           {bubbleText}
//         </div>
//       )
//     }
  
//     return <>{talkBubbles}</>
//   }

function TextMessages() {

}


function EMail({emailContent}) {
  // const emailBody = emailContent.body.map((line) => 
  // <p>{line}</p>);

  function EMailHeader () {

  }

  function EMailBody ({attachment}, {body}) {
    
    return (
    <>
    <div>{attachment}</div>
    <div>{body}</div>
    </>
    )
  }

  return (
    <div>
      <EMailHeader />
      <EMailBody attachment={emailContent.attachment} body={emailContent.body} />
    </div>
  )
  
}

// function EMail({content}) {
//   const emailBody = content.body.map((line) => 
//   <p>{line}</p>);

//   return <>{emailBody}</>;
// }



export default App;
