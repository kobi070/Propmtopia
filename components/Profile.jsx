import React from 'react'
import PromptCard from './PromptCard'

const ProfileComponent = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete
}) => {
  return (
    <section className='w-full'>
      <h1>
        {name} Profile
      </h1>
    </section>
  )
}

export default ProfileComponent