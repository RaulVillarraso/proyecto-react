import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComp from '../pure/contacto';



const ContactPage = () => {

    const defaultContact = new Contacto('Raúl','Villarraso','raulvillarraso@email.com',false)


    return (
        <div>
            <div>
                <h1>Tu Contacto: </h1>
            </div>
            <ContactoComp contacto={(defaultContact)}></ContactoComp>
        </div>
    );
};



export default ContactPage;
