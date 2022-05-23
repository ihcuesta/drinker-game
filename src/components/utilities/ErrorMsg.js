import React from 'react'
import MainButton from './MainButton'
import CancelButton from './CancelButton'

const ErrorMsg = ({ handleRetry, handleCancel }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/90 p-0 lg:p-20">
      <div className="w-full min-h-full flex items-center justify-center flex-col shadow-mainBlue/50 shadow-lg border-2 border-mainBlue bg-black/80 px-5 py-8 rounded-xl">
        <div className="flex flex-col justify-center items-center max-w-[500px]">
          <h2 className="text-mainPink font-bold text-5xl text-center mb-3">
            Connection failure
          </h2>
          <p className="text-mainBlue font-semibold text-xl">
            Ooops... The bar seems closed...
          </p>
          <MainButton text="RETRY" handleOnClick={handleRetry} />
          <CancelButton text="Back" handleCancel={handleCancel} />
        </div>
      </div>
    </div>
  )
}

export default ErrorMsg
