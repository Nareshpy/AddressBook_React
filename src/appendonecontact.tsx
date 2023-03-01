import ContactInfo from "./components/contactinfo/contactinfo";
import { IPerson } from "./icontact";
import "./components/appendonecontact.css";
export function AddingContact({statesObj,setStatesObj,newPerson,ContactInfoState}: {statesObj:any,setStatesObj:Function, newPerson: IPerson,ContactInfoState:Function }) {
       
       return (<div className="singleContact" id={newPerson.id} onClick={(e) => ContactInfoState(e.currentTarget.id)}>
        <h1 className='Name'> {newPerson.name} </h1>
        <p className='Mail'> {newPerson.email} </p>
        <p className='Mobile'> {newPerson.mobile} </p>
    </div>)
}

