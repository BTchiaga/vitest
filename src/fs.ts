import { readFileSync, existsSync } from "fs";
import { json } from "stream/consumers";
export function loadConfig(){
    if(!existsSync('./configt.json'))
        return undefined
    return JSON.parse(readFileSync('./configt.json','utf-8'))
}