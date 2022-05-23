import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveElection, levelUp, getLevels, resetStore } from '../../actions'
import Toast from '../utilities/Toast'
import { isEmpty } from 'ramda'
import GameResume from '../utilities/GameResume'
import LevelsBg from '../../assets/levelsBg.jpg'
import Chalkboard from '../../assets/chalkboard.jpg'
import DrinkBg from '../../assets/drinkBg.png'
import { FadeIn } from 'animate-css-styled-components'
import GameGuide from '../utilities/GameGuide'
import TimeLine from '../utilities/TimeLine'
import Exit from '../utilities/Exit'
import ErrorMsg from '../utilities/ErrorMsg'

const Levels = () => {
  const dispatch = useDispatch()
  const { currentLevel, levels, elections, difficulty, error } = useSelector(
    (state) => state.game
  )
  const [level, setLevel] = useState({})
  const [election, setElection] = useState({})
  const [gameFinished, setGameFinished] = useState(false)
  const [countDown, setCountDown] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setLevel(levels[currentLevel - 1])
    setCountDown(true)
  }, [currentLevel])

  useEffect(() => {
    let myTimeout
    if (countDown) {
      myTimeout = setTimeout(handleTimeOut, difficulty.time)
    } else {
      clearTimeout(myTimeout)
    }
    return () => clearTimeout(myTimeout)
  }, [countDown, currentLevel, difficulty])

  const handleLevelUp = () => {
    setElection({})
    if (currentLevel < difficulty.numLevels) {
      dispatch(levelUp())
    } else {
      endGame()
    }
  }

  useEffect(() => {
    setShowError(error)
  }, [error])

  const endGame = () => setGameFinished(true)

  const restartGame = () => {
    setGameFinished(false)
    dispatch(getLevels(difficulty))
  }

  const handleResetStore = () => {
    setGameFinished(false)
    dispatch(resetStore())
  }

  const handleSelectOption = (option) => {
    setCountDown(false)
    dispatch(saveElection(option))
    setElection(option)
    setTimeout(handleLevelUp, 2000)
  }

  const handleTimeOut = () => {
    console.log('Se acabó el tiempo!')
    dispatch(saveElection({ isTheCorrectOne: false }))
    handleLevelUp()
  }

  return (
    <>
      {showError && (
        <ErrorMsg handleRetry={restartGame} handleCancel={handleResetStore} />
      )}
      {gameFinished && (
        <GameResume
          handleRestart={restartGame}
          handleReset={handleResetStore}
        />
      )}
      {!isEmpty(election) && <Toast election={election} />}
      <div
        className="min-h-screen w-screen flex flex-col justify-between lg:justify-center items-center pt-5 pb-0 px-5 lg:p-6 relative bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${LevelsBg})` }}
      >
        <div className="flex w-full items-center px-5 pb-6">
          <div className="w-1/3"></div>
          <div className="w-1/3 flex justify-center">
            <GameGuide />
          </div>
          <div className="w-1/3 hidden md:flex justify-end">
            {currentLevel >= 1 && <Exit handleExit={handleResetStore} />}
          </div>
        </div>
        <div
          className={`flex flex-col items-center w-full justify-center ${
            elections.length === difficulty.numLevels && 'blur-sm'
          }`}
        >
          <FadeIn duration="0.8s" className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h2 className="text-4xl font-bold text-mainBlue mb-6 text-center">
              Guess the <span className="text-mainPink">drink</span>
            </h2>
            <div
              style={{ backgroundImage: `url(${Chalkboard})` }}
              className="min-h-[150px] rounded-xl relative bg-no-repeat flex items-center px-20 py-5 text-white caveat text-2xl"
            >
              <div className="absolute w-[20px] h-full bg-mainPink/50 left-0 top-0 rounded-l-xl"></div>
              <ul className="list-disc">
                {level?.ingredients?.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-24 mt-8 lg:mt-16 w-full md:w-2/3 lg:w-2/3 m-auto lg:max-w-3xl">
            {level?.options?.map((opt, i) => (
              <div
                key={i}
                className="p-2 gap-3 lg:gap-0 lg:p-0 rounded-l-full lg:rounded-none bg-black/50 lg:bg-transparent border-mainBlue border-2 lg:border-none shadow-mainBlue/50 shadow-lg lg:shadow-none w-full lg:w-1/3 cursor-pointer flex items-center lg:justify-center lg:flex-col hover:scale-105 transition-transform"
                onClick={() => handleSelectOption(opt)}
              >
                <div
                  className="w-[50px] lg:w-full lg:p-5 bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${DrinkBg})` }}
                >
                  <img
                    src={opt.image}
                    alt={opt.name}
                    className="rounded-full"
                  />
                </div>
                <p className="lg:mt-8 uppercase text-mainPink font-bold lg:text-center">
                  {opt.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        {elections.length !== difficulty.numLevels && (
          <TimeLine countDown={countDown} handleExit={handleResetStore} />
        )}
      </div>
    </>
  )
}

export default Levels
