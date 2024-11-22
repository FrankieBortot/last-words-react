import Chapter from "./App.js";
import {intro} from './conversations/0-intro.js';
import {january} from './conversations/1-january.js';
import {february} from './conversations/2-february.js';
import {march} from './conversations/3-march.js';
import {april} from './conversations/4-april.js';
import {may} from './conversations/5-may.js';
import {june} from './conversations/6-june.js';
import {july} from './conversations/7-july.js';
import {augustA} from './conversations/8-august-a.js';
import {augustB} from './conversations/8-august-b.js';
import {septemberA} from './conversations/9-september-a.js';
import {septemberB} from './conversations/9-september-b.js';
import {octoberA} from './conversations/10-october-a.js';
import {octoberB} from './conversations/10-october-b.js';
import {novemberA} from './conversations/11-november-a.js';
import {novemberB} from './conversations/11-november-b.js';
import {decemberA} from './conversations/12-december-a.js';
import {decemberB} from './conversations/12-december-b.js';
import {finaleA} from './conversations/13-finale-a.js';
import {finaleB} from './conversations/13-finale-b.js';
import {credits} from './conversations/14-credits.js';

export function Intro() {
   return <Chapter data={intro} />
}

export function January() {
   return <Chapter data={january} />
}

export function February() {
   return <Chapter data={february} />
}

export function March() {
   return <Chapter data={march} />
}

export function April() {
   return <Chapter data={april} />
}

export function May() {
   return <Chapter data={may} />
}

export function June() {
   return <Chapter data={june} />
}

export function July() {
   return <Chapter data={july} />
}

export function AugustA() {
   return <Chapter data={augustA} />
}

export function AugustB() {
   return <Chapter data={augustB} />
}

export function SeptemberA() {
   return <Chapter data={septemberA} />
}

export function SeptemberB() {
   return <Chapter data={septemberB} />
}

export function OctoberA() {
   return <Chapter data={octoberA} />
}

export function OctoberB() {
   return <Chapter data={octoberB} />
}

export function NovemberA() {
   return <Chapter data={novemberA} />
}

export function NovemberB() {
   return <Chapter data={novemberB} />
}

export function DecemberA() {
   return <Chapter data={decemberA} />
}

export function DecemberB() {
   return <Chapter data={decemberB} />
}

export function FinaleA() {
   return <Chapter data={finaleA} />
}

export function FinaleB() {
   return <Chapter data={finaleB} />
}

export function Credits() {
   return <Chapter data={credits} />
}