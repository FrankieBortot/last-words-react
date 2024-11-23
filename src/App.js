import './App.css';
import {Link} from "react-router-dom";
import * as pi from "@phosphor-icons/react";
import { useState } from 'react';

// questo è il contenitore principale, il Chapter, che può avere più Sections
export default function Chapter({data}) {

  // copio il valore di ogni isVisible in un array di stati,
  // così ho una variabile in cui è gestita la visibilità di ogni sezione
  const [sectionVisibility, setSectionVisibility] = useState(data.map((section, sectionIndex) => section.isVisible));

  // qui rendo visibili le sezioni: la funzione riceve un array di indici da mettere a true
  // gli indici li riceve poi direttamente dai dati della sezione (section.actions.sectionsOpened)
  function handleVisibility(sectionIndex) {
    const currentVisibility = [...sectionVisibility];
    const nextVisibility = currentVisibility.map((visibility, visibilityIndex) => 
      sectionIndex.includes(visibilityIndex) ? true : visibility
    )
    setSectionVisibility(nextVisibility)
  }

  // questa è la funzione principale che stampa tutte le sezioni
  const displaySections = data.map((section, sectionIndex) => 
    <Section 
      sectionContent={section} 
      key={sectionIndex}
      isVisible={sectionVisibility[sectionIndex]} // valore preso direttamente dall'array di stati
      sectionAction={handleVisibility} // qui viene passata alla section l'azione per rendere visibili le sezioni successive
      /> 
  )

  // questa serve solo a stampare una lista delle sezioni con il rispettivo
  // stato di visibilità: on (si vede) oppure off (non si vede)
  // l'informazione è presa dall'array di stati SectionVisibility
  const countSections = sectionVisibility.map((section, sectionIndex) =>
    section ? <div>{sectionIndex + " on"}</div> :
    <div>{sectionIndex + " off"}</div>
  )

  // il contenitore più esterno è il chapter
  // e gli viene assegnato un tema (light o dark), preso direttamente dal json
  return (
    <div className={"chapter " + data[0].theme}>
      {countSections}
      {displaySections}
    </div>
    
  );
}

// questa è la funzione che renderizza ogni sezione
// prende il contenuto dal json
function Section({sectionContent, isVisible, sectionAction}) {

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

  const actions = sectionContent.actions?.map((action, actionIndex) => {
    return (   
      <ButtonAction action={action} onInteraction={sectionAction} key={actionIndex} sectionsOpened={action.sectionsOpened}/>
    )
  }) 

  const isVisibleByDefault = (isVisible ? "visible" : "invisible")

  return (
    <div className={"section " + isVisibleByDefault} id={sectionContent.index} >
      <SectionHeader type={sectionContent.type} title={sectionContent.title} />
      {mainContent}
      <div className='action-area'>
        {actions}
      </div>
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

function LiveTalk({talkContent}) {

  const conversation = talkContent.body.map((bubbleGroup, bubbleGroupIndex) => {   
    return (
      <BubbleGroup 
        words={bubbleGroup} 
        speaker={bubbleGroup.speaker} 
        key={bubbleGroupIndex}
      />
    ) 
  });
  
  return <>{conversation}</>
}

function TextMessages({textContent}) {

  // eslint-disable-next-line array-callback-return
  const conversation = textContent.body.map((bubbleGroup, bubbleGroupIndex) => {   
    return (
      <BubbleGroup 
        words={bubbleGroup} 
        speaker={bubbleGroup.speaker} 
        key={bubbleGroupIndex}
      />
    ) 
  });

  return <>{conversation}</>
}

function BubbleGroup ({words, speaker}) {
  const lines = words.lines.map((line, lineIndex) => <TalkBubble bubbleText={line} speaker={speaker} key={lineIndex} /> );
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


function EMail({emailContent}) {

  const emailBody = emailContent.body.map((line, lineIndex) => 
  <p key={lineIndex}>{line}</p>);

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

function ButtonAction({action, onInteraction, sectionsOpened}) {

  const button = (
    action.type === "go-to-chapter" ? 
      // in questo caso il button utilizza il componente Link di React-Router per reindirizzare alla route 
      <button className={action.type}>
        <Link to={action.link}>{action.copy.main}</Link> 
      </button> :

    action.type === "go-to-section" ? 
      <button className={action.type} onClick={() => onInteraction(sectionsOpened)}>
        <a href={"#" + sectionsOpened[0]}>{action.copy.main} TEST AZIONE</a>
      </button> :
    
    null
  )
  
  return (
    <>
    {button}
    <p>{action.copy.description}</p>
    </>
  )
}
