import Chapter from "./App.js";
import {intro} from './conversations/intro.js';
import {january} from './conversations/january.js';
import {february} from './conversations/february.js';

export function Intro() {
   return <Chapter data={intro} />
}

export function January() {
   return <Chapter data={january} />
}

export function February() {
   return <Chapter data={february} />
}

// export function March() {
//    return <Chapter data={march} />
// }

// export function April() {
//    return <Chapter data={april} />
// }

// export function May() {
//    return <Chapter data={may} />
// }

// export function June() {
//    return <Chapter data={june} />
// }

// export function July() {
//    return <Chapter data={july} />
// }

// export function Credits() {
//    return <Chapter data={credits} />
// }