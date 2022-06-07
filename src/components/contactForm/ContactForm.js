import React from "react";
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}required palceholder="Contact Name"/>
        </label> 
        <br/>
         <label>
          Phone # :
          <input type="tel" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}required
         palceholder="Phone number" />
        </label>
        <br/>
        <label>
          Email :
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoCapitalize="none" spellCheck="false" required 
         placeholder="example@domain.com" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
  );
};