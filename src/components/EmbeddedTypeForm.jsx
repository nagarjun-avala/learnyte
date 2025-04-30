import React, { useEffect } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css'



const EmbeddedTypeForm = ({ link }) => {
    createWidget('<form-id>', { container: document.querySelector('#form') })

    return (
        <div data-tf-widget="<form-id>"></div>
    );
};

export default EmbeddedTypeForm;
