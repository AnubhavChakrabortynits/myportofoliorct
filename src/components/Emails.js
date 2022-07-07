import React from 'react'

export default function Emails() {
  return (
    <div className='container bg-dark d-flex text-white'>
      <form id="contact-form">
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send"/>
    </form>
    </div>
  )
}
