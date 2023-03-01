import React from "react";
import { IPerson } from "../../icontact";
import { images } from "../../assets/images";
import "./contactinfo.css"
import { IformView } from "../../assets/formview";
import { Services } from "../services";
import deleteicon from '../../assets/delete1.png';
import editicon from '../../assets/Edit-icon.png';
import { useNavigate } from "react-router-dom";
let contactServices:Services=new Services();
export default function ContactInfo({setStatesObj,statesObj, newPerson}:{setStatesObj:Function,statesObj:any, newPerson:IPerson}){
    const navigate=useNavigate();
    function handleEdit()
    {
        let varForm:IformView;
         varForm={...statesObj.selectedContact,action:"edit"}
        setStatesObj({...statesObj,formInfo:varForm,showFormpage:true,showContactInfo:false})
        navigate('/form/'+statesObj.selectedContact.id);
    }
    function handleDelete()
    {
     contactServices.deleteDetails(statesObj.selectedContact.id)
     setStatesObj({...statesObj,showFormpage:false,showContactInfo:false})
     navigate('/');
    } 
    return (
        <div className="contactInfo">
            <div className="nameBar">
                <h1 id="detailedName">{newPerson.name}</h1>
                <div className="center">
                    <div className="modifyBar">
                        <div className="modify" id="edit">
                            <img id="editICon" className="editSymbol" src={editicon} />
                            <a className="btn" onClick={()=>handleEdit()}>EDIT</a>
                        </div>
                        <div className="modify" id="delete">
                            <img className="deleteSymbol" src={deleteicon} />
                            <a className="btn" onClick={()=>handleDelete()}>DELETE</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div id="maildiv" className="sameline content">
                    <p>Email:</p>&nbsp;
                    <pre className="infer" id="detailedEmail">{newPerson.email}</pre>
                </div>
                <div id="mobdiv" className="sameline content">
                    <p>Mobile:</p>&nbsp;
                    <pre className="infer" id="detailedMobile">{newPerson.mobile}</pre>
                </div>
                <div id="landlinediv" className="sameline">
                    <p>Landline:</p>&nbsp;
                    <pre className="infer" id="detailedLandline">{newPerson.landline}</pre>
                </div>
                <div id="webdiv" className="sameline content">
                    <p>Website:</p>&nbsp;
                    <pre className="infer" id="detailedWebsite">{newPerson.website}</pre>
                </div>
                <div id="addressdiv" className="sameline content">
                    <p>Address:</p>&nbsp;
                    <pre className="infer" id="detailedAddress">{newPerson.address}</pre>
                </div>
            </div>
        </div>
    )
}