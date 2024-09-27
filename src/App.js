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
  
  function SectionHeader ({type, title}) {
    return (
      <div className={"section-header " + type}>
        {title}
      </div>
    )
  }

  const mainContent = (
    sectionContent.type === "live-talk" ? <LiveTalk className="live-talk" talkContent={sectionContent} />:
    sectionContent.type === "text-messages" ? <TextMessages className="text-messages" textContent={sectionContent} />:
    sectionContent.type === "e-mail" ? <EMail className="e-mail" emailContent={sectionContent} />:
    "this will be the title"
  )

  const actions = sectionContent.actions?.map((action) => {
    return (
    <>
      <button>{action.main}</button>
      <p>{action.description}</p>
    </>
    )
  }) 

  return (
    <div className="section">
      <SectionHeader type={sectionContent.type} title={sectionContent.title} />
      {mainContent}
      {actions}
    </div>
  )
  
}


function TalkBubble ({bubbleText, speaker}) {
  return (
    <div className={"bubble " + speaker}> {bubbleText}
    </div>
  )
}

function LiveTalk({talkContent}) {

  const conversation = talkContent.body.map((bubbleGroup) => {  

    const lines = bubbleGroup.lines.map((line) => <TalkBubble bubbleText={line} speaker={bubbleGroup.speaker}/> );

    return (
      <div className="live-talk">
        {lines}
      </div> 
    )
  } )
  
  return <>{conversation}</>
}

function TextMessages({textContent}) {

  const conversation = textContent.body.map((bubbleGroup) => {  
    
    if (bubbleGroup.speaker === "Frankie") {
      const lines = bubbleGroup.lines.map((line) => <TalkBubble bubbleText={line} /> );
      return (
        <div className='text-messages Frankie'>
          {lines}
        </div>
      )

    } else if (bubbleGroup.speaker === "Lusinda") {
      const lines = bubbleGroup.lines.map((line) => <TalkBubble bubbleText={line} /> );
      return (
        <div className='text-messages Lusinda'>
          {lines}
        </div>
      )

    } 
  } );

  return <>{conversation}</>
}


function EMail({emailContent}) {

  const emailBody = emailContent.body.map((line) => 
  <p>{line}</p>);

  function EMailHeader ({headerContent}) {

    return(
      <div className='email-header'>
        <p>sender: {headerContent.sender}</p>
        <p>receiver: {headerContent.receiver}</p>
        <p>object: {headerContent.object}</p>
      </div> 
    )
  }

  function EMailBody ({attachment, body}) {   
    return (
      <>
      {attachment}
      {body}
      </>
    )
  }

  return (
    <div>
      <EMailHeader headerContent={emailContent} />
      <EMailBody attachment={emailContent.attachment} body={emailBody} />
    </div>
  )
}



export default App;
