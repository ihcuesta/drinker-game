import React from 'react'

const CancelButton = ({ text, handleCancel }) => {
  return (
    <button
      onClick={handleCancel}
      className="text-mainBlue mt-5 hover:font-semibold cursor-pointer"
    >
      {text}
    </button>
  )
}

export default CancelButton
