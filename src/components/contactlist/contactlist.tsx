import React from "react"
import { InitialContactsDisplay } from "./initialcontacts"
export function Contactlist({statesObj,setStatesObj,ContactInfoState}:{statesObj:any,setStatesObj:Function,ContactInfoState:Function}){
    return(<div id="contact-list" className="allContacts">
        <InitialContactsDisplay ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj}/>
    </div>)
}