import React from 'react'
import nocontacts from "../../assets/no-contact.jpg"
function NoContacts() {
  return (
    <div className='flex flex-col items-center justify-center my-auto'>
      <img className='w-[170px] h-[180px]' src={nocontacts} alt="No Contacts" />
      <h4 className='text-[20px] text-[#6F40FF] font-semibold tracking-wide'>No Contacts Yet</h4>
      <span className='text-[13px] text-[#111b21] font-medium tracking-wide'>Search for people</span>
    </div>
  )
}

export default NoContacts