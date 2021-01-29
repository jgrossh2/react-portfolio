import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name:' ', email:' ', message:' ' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
                }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else{
                    setErrorMessage('');
                }
            }
            if (!errorMessage) {
                setFormState({...formState, [e.target.name]: e.target.value });
            }
        };    
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
        console.log(formState);
        }   
    };

    return (
        <Form>
            <h1 data-testid='h1tag'>Contact Me</h1>
                <div>
                <a href="mailto:joannagrosshans2@gmail.com" target="_blank" rel='noreferrer'>@Joanna Grosshans</a>
                </div>
                <div>
                <label for="phone">PHONE: #847.347.7356</label>
                </div>
                <form id='contact-form' onSubmit={handleSubmit}>
                        <FormGroup>
                        <Label for='name'>Name:</Label>
                        <Input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email Address:</Label>
                            <Input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='exampleText'>Message:</Label>
                            <Input type="textarea" name='text' rows='5' defaultValue={message} onBlur={handleChange}/>
                        </FormGroup>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type='submit'>Submit</button>
                </form>
        </Form>
    );
}
 
export default ContactForm;