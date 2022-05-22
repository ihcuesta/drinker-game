import React from 'react'
import VideoMobile from '../../assets/video-mobile.mp4'
import VideoDesktop from '../../assets/video-desktop.mp4'
import MainButton from './MainButton'

const HowToPlay = ({ handlePlay, handleCancel }) => {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed z-10 bg-black/70 p-0 lg:p-20">
      <div className="w-full min-h-full flex items-center justify-center flex-col shadow-mainBlue/50 shadow-lg border-2 border-mainBlue bg-black/80 px-5 py-8 rounded-xl">
        <div className="max-w-[500px]">
          <h2 className="text-center text-mainBlue font-bold text-4xl mb-7">
            HOW TO PLAY 🎮
          </h2>
          <p className="text-white text-xl mb-10">
            Based on the{' '}
            <span className="text-mainBlue font-bold">ingredients</span> written
            on the board 👨‍🏫, click on the correct drink from the possible
            options before the time runs out! ⏱️ Good luck! 😉
          </p>
          <video
            className="lg:hidden"
            width="100%"
            height="auto"
            controls
            muted
          >
            <source src={VideoMobile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="hidden lg:block"
            width="100%"
            height="auto"
            controls
            muted
          >
            <source src={VideoDesktop} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex flex-col items-center mt-5">
            <MainButton text="READY" handleOnClick={handlePlay} />
            <button
              onClick={handleCancel}
              className="text-mainBlue mt-5 hover:font-semibold"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
