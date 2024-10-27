import './App.css';
import {intro} from './conversations/intro.js';

function App() {

  const displaySections = intro.map((section, sectionIndex) => 
    <Section 
      sectionContent={section} 
      key={sectionIndex} 
      isVisible={section.isVisible}
      /> 
  )

  return (
    <div className={"App " + intro[0].theme}>
     {displaySections}
    </div>
  );
}


function Section({sectionContent, isVisible}) {

  if (sectionContent.type === "meta") {
    return null
  }
  
  function SectionHeader ({type, title}) {
    
    if (type === "intro") {
      return null
    }

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
    sectionContent.type === "intro" ? <Intro className="intro" introContent={sectionContent} />:
    "this will be the main content"
  )

  const actions = sectionContent.actions?.map((action) => {
    return (   
      <ButtonAction action={action} />
    )
  }) 

  const isVisibleByDefault = (isVisible ? "visible" : "invisible")

  return (
    <div className={"section " + isVisibleByDefault}>
      <SectionHeader type={sectionContent.type} title={sectionContent.title} />
      {mainContent}
      <ActionArea>
        {actions}
      </ActionArea>
    </div>
  )
  
}


function TalkBubble ({bubbleText, speaker}) {
  return (
    <div className={"bubble " + speaker}> {bubbleText}
    </div>
  )
}

function ButtonAction({action}) {

  return (
    <>
    <button className={action.type}>
      <a href={action.link}>{action.copy.main}</a>
    </button>
    <p>{action.copy.description}</p>
    </>
  )
}

function ActionArea({children}) {
  return (
    <div className='action-area'>
      {children}
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

function Intro({introContent}) {
  return (
    <div className='intro'>
      <h1>
        {introContent.title}
      </h1>
      <h2>
        {introContent.subtitle}
      </h2>
    </div>
  )
}


export default App;
