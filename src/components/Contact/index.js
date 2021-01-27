import React from "react"
 
function ContactForm(props) {
  return (
      <section>
          <h1 data-testid='h1tag'>Contact Me</h1>
          <div>
          <a href="mailto:joannagrosshans2@gmail.com" target="_blank" rel='noreferrer'>@Joanna Grosshans</a>
          </div>
          <div>
          <label for="phone">PHONE: #847.347.7356</label>
          </div>
          <form id='contact-form'>
              <div>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' name='name' /> 
              </div>
              <div>
                  <label htmlFor='email'>Email Address:</label>
                  <input type='email' name='email' />
              </div>
              <div>
                  <label htmlFor='message'>Message:</label>
                  <textarea name='message' rows='5' />
              </div>
              <button type='submit'>Submit</button>
          </form>
      </section>
  )
}
 
export default ContactForm;