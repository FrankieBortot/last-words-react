import './App.css';
import {Link} from "react-router-dom";
import * as pi from "@phosphor-icons/react";

export default function Chapter({data}) {

  const displaySections = data.map((section, sectionIndex) => 
    <Section 
      sectionContent={section} 
      key={sectionIndex} 
      isVisible={section.isVisible}
      /> 
  )

  return (
    <div className={"chapter " + data[0].theme}>
     {displaySections}
    </div>
  );
}


function Section({sectionContent, isVisible}) {

  if (sectionContent.type === "meta") {
    return null
  }
  
  function SectionHeader ({type, title}) {

    const sectionHidingTitle = ["intro", "narration"]

    const titleHidden = (sectionHidingTitle.includes(type) ? true : false);
    
    if (titleHidden) {
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
    sectionContent.type === "narration" ? <Narration className="narration" narrativeContent={sectionContent} />:
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

function BubbleGroup ({words, speaker}) {
  const lines = words.lines.map((line) => <TalkBubble bubbleText={line} speaker={speaker} /> );
      return (
        <div className={"bubble-group " + speaker}>
          {lines}
        </div>
      )
}

function TalkBubble ({bubbleText, speaker}) {
  return (
    <div className="bubble"> {bubbleText}
    </div>
  )
}

function ButtonAction({action}) {

  return (
    <>
    <button className={action.type}>
      <Link to={action.link}>{action.copy.main}</Link>
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
    return (
      <BubbleGroup words={bubbleGroup} speaker={bubbleGroup.speaker} />
    ) 
  });
  
  return <>{conversation}</>
}

function TextMessages({textContent}) {

  // eslint-disable-next-line array-callback-return
  const conversation = textContent.body.map((bubbleGroup) => {   
    return (
      <BubbleGroup words={bubbleGroup} speaker={bubbleGroup.speaker} />
    ) 
  });

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
    
    const attachedToEmail = (attachment ? <div className='attachment'><pi.Paperclip size={16} weight="duotone" /> {attachment}</div> : null);

    return (
      <>
        {attachedToEmail}
        <div className='email-body'>
          {body}
        </div>
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

function Narration({narrativeContent}) {
  return (
    <div className='narration'>
      <h1>
        {narrativeContent.title}
      </h1>
    </div>
  )
}

