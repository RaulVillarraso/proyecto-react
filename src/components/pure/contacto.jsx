import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComp = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: {contacto.name}
            </h2>
            <h2>
                Apellido: {contacto.surname}
            </h2>
            <h3>
                Email: {contacto.email}
            </h3>
            <h4>
                {contacto.conectado ? 'Contacto en Línea':'Contacto No Disponible'}
            </h4>
        </div>
    );
};


ContactoComp.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComp;
