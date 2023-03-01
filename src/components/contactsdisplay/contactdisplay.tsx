import "./contactdisplay.css";
import { Formpage } from "../formpage/formpage";
import { Contactlist } from "../contactlist/contactlist";
import ContactInfo from "../contactinfo/contactinfo";
import { IformView } from "../../assets/formview";
import { IPerson } from "../../icontact";
import { IValidates } from "../validateinterface";
import { Route, Routes } from "react-router-dom";
function ContactsDisplay({statesObj,setStatesObj,ContactInfoState}:{statesObj:{ showFormpage: boolean, formInfo: IformView, selectedContact: IPerson,showContactInfo:boolean,validates:IValidates},setStatesObj:Function,ContactInfoState:Function}){

    return(<div id="contacts-display">
        <Contactlist ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj}/>
        <Routes>
        <Route path="/form/:id" element={<Formpage id={statesObj.formInfo.id} statesObj={statesObj} setStatesObj={setStatesObj} />}/>
        <Route path={"/contact/"+statesObj.selectedContact.id} element={<ContactInfo newPerson={statesObj.selectedContact} statesObj={statesObj} setStatesObj={setStatesObj}/>}/>
        </Routes>  
    </div>)
}
export default ContactsDisplay;