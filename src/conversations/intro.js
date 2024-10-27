export const content = [ 
    {
    "type": "meta",
    "theme": "light",
    }, 

    { 
    "type": "intro",
    "id": "part-1",
    "isVisible": true,
    "title": "Last Words",
    "subtitle": "Un racconto interattivo di vita, di morte e di altre sciocchezze"
    },

    {
    "title": "EMAIL",
    "id": "part-2",
    "isVisible": true,
    "type": "e-mail",
    "sender": "Lucinda Demàr",
    "receiver": "Frankie",
    "object": "AAA Cercasi informatico simpatico! :)",
    "attachment": "Proposte navigazione web",
    "body": [
        "Ciao!", 
        "corpo della mail", 
        "saluti",
        "firma"
    ],
    "actions": [{
        "type": "open-next",
        "copy": {
            "main": "Vai al nuovo capitolo",
            "description": ""
        }
    }]
    },

    {
    "title": "LIVETALK",
    "id": "part-3",
    "isVisible": true,
    "type": "live-talk",
    "body": [ { 
        "speaker": "Frankie",
        "lines": [
            "Livetalk Frankie first line",
            "Livetalk Frankie second line"
        ] }, { 
        "speaker": "Lusinda",
        "lines": [
            "Livetalk Lusinda first line",
            "Livetalk Lusinda second line"
            ] }, { 
        "speaker": "none",
        "lines": ["..."]
        }
    ],
    "actions": [{
        "type": "open-next",
        "copy": {
            "main": "Apri la prossima sezione",
            "description": "interessante!"
        }
        },
        {
        "type": "open-next",
        "copy": {
            "main": "Apri la prossima sezione",
            "description": "interessante!"
        }
        } ]
    },

    {
    "title": "LIVETALK",
    "id": "part-4",
    "isVisible": false,
    "type": "live-talk",
    "body": [ { 
        "speaker": "Frankie",
        "lines": [
            "Livetalk Frankie first line",
            "Livetalk Frankie second line"
        ] }, { 
        "speaker": "Lusinda",
        "lines": [
            "Livetalk Lusinda first line",
            "Livetalk Lusinda second line"
            ] }, { 
        "speaker": "none",
        "lines": ["..."]
        }
    ],
    "actions": [{
        "type": "open-next",
        "sections-opened": [
        
        ],
        "copy": {
            "main": "Apri la prossima sezione",
            "description": "interessante!"
        }
    }]
    },

    {
    "title": "TEXTMESSAGE",
    "id": "part-5",
    "isVisible": true,
    "type": "text-messages",
    "isOnline": "true",
    "body": [ { 
        "speaker": "Frankie",
        "lines": [
            "TextMessages Frankie first line",
            "TextMessages Frankie second line"
        ] }, { 
        "speaker": "Lusinda",
        "lines": [
            "TextMessages Lusinda first line",
            "TextMessages Lusinda second line"
            ] }, { 
        "lines": ["..."]
        }
    ],
    "actions": [{
        "type": "choose-your-way",
        "link": "https://google.com",
        "copy": {
            "main": "Vai al nuovo capitolo",
            "description": "interessante!"
        },
        }, {
        "type": "go-to-next-chapter",
        "link": "https://google.com",
        "copy": {
            "main": "Vai al nuovo capitolo",
            "description": "interessante!"
        }
        } 
    ]}
];

export default content;