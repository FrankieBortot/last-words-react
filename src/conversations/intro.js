export const intro = [ 
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
    "type": "narration",
    "id": "part-n",
    "isVisible": true,
    "title": "È andata così"
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
        "type": "open-section",
        "sectionsOpened": "test",
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
        "type": "open-section",
        "sectionsOpened": 5,
        "copy": {
            "main": "Apri la prossima sezione",
            "description": "interessante!"
        }
        },
        {
        "type": "open-section",
        "sectionsOpened": 6,
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
        "type": "open-section",
        "sectionsOpened": "test",
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
        "type": "go-to-chapter",
        "link": "january",
        "copy": {
            "main": "Vai a Gennaio",
            "description": "interessante!"
        },
        }, {
        "type": "go-to-chapter",
        "link": "february",
        "copy": {
            "main": "Vai a Febbraio",
            "description": "interessante!"
        }
        } 
    ]}
];
