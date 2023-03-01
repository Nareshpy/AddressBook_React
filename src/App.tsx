import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavbarFunction } from './components/navbar/navbar';
import { Header } from './components/header/header';
import ContactsDisplay from './components/contactsdisplay/contactdisplay';
import Title from './components/title/title';
import { useState } from 'react';
import { IPerson } from './icontact';
import { Services } from './components/services';
import { IformView } from './assets/formview';
import { IValidates } from './components/validateinterface';
import { Formpage } from './components/formpage/formpage';
let contactServices: Services = new Services();
function App() {
  const [statesObj, setStatesObj] = useState<{ showFormpage: boolean, formInfo: IformView, selectedContact: IPerson, showContactInfo: boolean, validates: IValidates }>({
    showFormpage: false, formInfo: {
      action: "Add",
      id: "",
      name: "",
      email: "",
      mobile: "",
      address: "",
      website: "",
      landline: ""
    },
    selectedContact: {
      id: "",
      name: "",
      email: "",
      mobile: "",
      address: "",
      website: "",
      landline: ""
    }, showContactInfo: false,
    validates: {
      isNameValid: false,
      isEmailValid: false,
      isMobileValid: false
    }
  })
  const ContactInfoState = (id: string) => {
    setStatesObj({ ...statesObj, showFormpage: false, showContactInfo: true, selectedContact: contactServices.getContactById(id) });
  }
  return (
    <div>
      <Header />
      <NavbarFunction statesObj={statesObj} setStatesObj={setStatesObj} />
      <Title />
      <ContactsDisplay ContactInfoState={ContactInfoState} statesObj={statesObj} setStatesObj={setStatesObj} />
    </div>
  );
}

export default App;
