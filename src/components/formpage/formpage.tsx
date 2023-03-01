import { Guid } from 'guid-typescript';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddingContact } from '../../appendonecontact';
import { IformView } from '../../assets/formview';
import { IPerson } from '../../icontact';
import { Services } from '../services';
import { IValidates } from '../validateinterface';
import { Validator } from '../validations';
import './formpage.css'
import { ValidateForm } from './formvalidator';
let contactServices: Services = new Services();
let validateForm: ValidateForm = new ValidateForm();
export function Formpage({ id, statesObj, setStatesObj }: { id: string, statesObj: { showFormpage: boolean, formInfo: IformView, selectedContact: IPerson, showContactInfo: boolean, validates: IValidates }, setStatesObj: Function }) {
    const navigate=useNavigate();
    const [validates , setValidates]=useState<IValidates>({isNameValid:false,
        isEmailValid:false,
        isMobileValid:false})
    function handleChange(e: any) {
        let lableName = e.target.name;
        let formInfo = statesObj.formInfo;
        setStatesObj({ ...statesObj, formInfo: { ...formInfo, [lableName]: e.target.value } });
    }
    function submitHandler(e: any) {
        e.preventDefault();
        let isValidName: boolean, isValidEmail: boolean, isValidMobile: boolean;
        isValidName = validateForm.ValidateName(statesObj.formInfo.name);
        isValidEmail = validateForm.ValidateEmail(statesObj.formInfo.email);
        isValidMobile = validateForm.ValidateMobile(statesObj.formInfo.mobile);
        console.log(isValidEmail,isValidMobile,isValidName);
        if(!isValidName&&!isValidMobile&&!isValidEmail){
        if (statesObj.formInfo.action === "Add") {
            let newContact: IPerson;
            newContact = { id: Guid.create().toString(), name: statesObj.formInfo.name.toString(), email: statesObj.formInfo.email, mobile: statesObj.formInfo.mobile, address: statesObj.formInfo.address, website: statesObj.formInfo.website, landline: statesObj.formInfo.landline }
            contactServices.addContact(newContact)
            navigate("/contact/"+newContact.id)
            let varForm: IformView = { ...statesObj.formInfo, name: "", id: "", mobile: "", address: "", email: "", website: "", landline: "" }
            setStatesObj({ ...statesObj, formInfo: varForm, showFormpage: false, showContactInfo: true, selectedContact: newContact });
           
        }
        else {
            let newContact: IPerson;
            newContact = { id: statesObj.selectedContact.id, name: statesObj.formInfo.name, email: statesObj.formInfo.email, mobile: statesObj.formInfo.mobile, address: statesObj.formInfo.address, website: statesObj.formInfo.website, landline: statesObj.formInfo.landline }
            contactServices.updateContact(newContact.id, newContact)
            navigate("/contact/"+newContact.id)
            let varForm: IformView = { ...statesObj.formInfo, name: "", id: "", mobile: "", address: "", email: "", website: "", landline: "" }
            setStatesObj({ ...statesObj, formInfo: varForm, showFormpage: false, showContactInfo: true, selectedContact: contactServices.getContactById(newContact.id) });
        }}
        else{
            setValidates({isNameValid:isValidName,isEmailValid:isValidEmail,isMobileValid:isValidMobile});
        }
    }


    return (
        <div id="formpage-container">
            <form id="formpage" >
                <label htmlFor="name">Name<span className="mandatory" id="blankName">      
                {validates.isNameValid?"Name Required":"*"}   
                </span></label><br />
                <input type="text" id="name" className="form-control" name="name" value={statesObj.formInfo.name} onChange={handleChange} />
                <br />
                <label htmlFor="email">Email<span className="mandatory" id="blankMail">   
                {validates.isEmailValid?"Valid mail is made mandatory":"*"}   
                    </span></label><br />
                <input type="email" id="mail" className="form-control" name="email" value={statesObj.formInfo.email} onChange={handleChange} />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="mobile">Mobile <span className="mandatory" id="blankMobile">      
                {validates.isMobileValid?"Valid mobile Required":"*"}   
                </span></label>
                    </div>
                    <div className="col-6">
                        <label id='landlinelabel' htmlFor="landline">Landline</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="text" id="mobile" className="form-control" name="mobile" value={statesObj.formInfo.mobile} onChange={handleChange} />
                    </div>
                    <div className="col-5">
                        <input type="text" id="landline" className="form-control" name="landline" value={statesObj.formInfo.landline} onChange={handleChange} />
                    </div>
                </div>
                <label htmlFor="website">website</label><br />
                <input type="text" id="website" className="form-control" name="website" value={statesObj.formInfo.website} onChange={handleChange} />
                <label htmlFor="address">Address</label><br />
                <textarea id="address" className="form-control" name="address" value={statesObj.formInfo.address} onChange={handleChange}></textarea>
                <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2">
                        {statesObj.formInfo.action == "Add" && <input type="button" id="subButton" value={statesObj.formInfo.action} className="addingBtn" onClick={submitHandler} />}
                        {statesObj.formInfo.action == "edit" && <input type="button" id="subButton" value={statesObj.formInfo.action} className="addingBtn" onClick={submitHandler} />}
                    </div>
                </div>
            </form>
        </div>
    )
}