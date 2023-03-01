import { AddingContact } from "../../appendonecontact"
import { people } from "../../allcontacts"
import { IPerson } from "../../icontact"
import "./contactlist.css"
import { Link } from "react-router-dom"
export function  InitialContactsDisplay({statesObj,setStatesObj,ContactInfoState}:{statesObj:any,setStatesObj:Function,ContactInfoState:Function}){
    return(<div id="contact-list">
        {people.map((newPerson:IPerson)=><Link to={'/contact/'+newPerson.id}><AddingContact key={newPerson.id} ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj} newPerson={newPerson}></AddingContact></Link>)} 
    </div>)
}
