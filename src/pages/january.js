import Chapter from "../App.js";
import {content} from '../conversations/january.js';

export default function Intro() {
   return <Chapter data={content} />
}