import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

const defaultContacts = [
    {
      name: 'Whatever Name',
      phone: '8274832859',
      email: 'whaname@defaultemail.com'
    },
    {
      name: 'John Doe',
      phone: '07787654321',
      email: 'john@defaultemail.com'
    }
  ];

  const [contacts, setContacts] = useState(defaultContacts);

  const addContacts = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, {name: name, phone: phone, email: email}];
    });
  }

const [appointments, setAppointments] = useState([]);
const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, {title: title, contact: contact, date: date, time: time}]
    });
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
