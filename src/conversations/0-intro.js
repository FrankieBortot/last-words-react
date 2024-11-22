export const intro = [ 
    {
    "type": "meta",
    "theme": "light",
    }, 

    { 
    "type": "intro",
    "index": 1,
    "isVisible": true,
    "title": "Last Words",
    "subtitle": "Un racconto interattivo di vita, di morte e di altre sciocchezze",
    "actions": [{
        "type": "open-section",
        "sectionsOpened": [2,3,4],
        "copy": {
            "main": "Vai al nuovo capitolo",
            "description": ""
        }
    }]
    },

    { 
    "type": "intro",
    "index": 2,
    "isVisible": false,
    "title": "Last Words",
    "subtitle": "Un racconto interattivo di vita, di morte e di altre sciocchezze"
    },

    { 
    "type": "narration",
    "index": 3,
    "isVisible": false,
    "title": "È andata così"
    },

    {
    "title": "EMAIL",
    "index": 4,
    "isVisible": false,
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
    "index": 5,
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
        "sectionsOpened": [5],
        "copy": {
            "main": "Apri la 5",
            "description": "interessante!"
        }
        },
        {
        "type": "open-section",
        "sectionsOpened": [1, 2],
        "copy": {
            "main": "Apri la sez 1 e 2",
            "description": "interessante!"
        }
        } ]
    },

    {
    "title": "LIVETALK",
    "index": 6,
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
        "sectionsOpened": [1],
        "copy": {
            "main": "Apri la prossima sezione",
            "description": "interessante!"
        }
    }]
    },

    {
    "title": "TEXTMESSAGE",
    "index": 7,
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
        }
        }, {
        "type": "go-to-chapter",
        "link": "august/a",
        "copy": {
            "main": "Vai ad AGOSTO A",
            "description": "interessante! <b>vero?</b>"
        }
        } 
    ]}
];
