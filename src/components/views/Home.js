import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLevels } from '../../actions'
import homeBg from '../../assets/homeBg2.jpg'
import heroClaim from '../../assets/heroClaim.svg'
import { FadeIn } from 'animate-css-styled-components'
import MainButton from '../utilities/MainButton'
import Record from '../utilities/Record'
import Difficulty from '../utilities/Difficulty'
import HowToPlay from '../utilities/HowToPlay'

const Home = () => {
  const dispatch = useDispatch()

  const { difficulty } = useSelector((state) => state.game)

  const initGame = () => dispatch(getLevels(difficulty))
  const [thereIsRecord, setThereIsRecord] = useState(false)
  const [howToPlay, setHowToPlay] = useState(false)

  const record = localStorage.getItem('record')

  const handlePlay = () => (record ? initGame() : setHowToPlay(true))

  useEffect(() => {
    if (record) setThereIsRecord(true)
  }, [record])

  return (
    <>
      {howToPlay && (
        <HowToPlay
          handlePlay={initGame}
          handleCancel={() => setHowToPlay(false)}
        />
      )}
      <div
        className="min-h-screen w-screen bg-cover bg-no-repeat bg-right-top flex justify-end"
        style={{
          backgroundImage: `linear-gradient(#00000080, #00000080), url(${homeBg})`
        }}
      >
        <div className="w-full 2xl:w-2/3 flex justify-between items-center flex-col p-5 xl:px-16">
          <div></div>
          <div className="flex justify-between items-center flex-col">
            <FadeIn duration="0.5s">
              <img src={heroClaim} alt="Drinker Game" />
            </FadeIn>
            <FadeIn duration="0.5s" delay="0.3s">
              {thereIsRecord && <Record record={record} />}
              {thereIsRecord ? (
                <p className="text-mainBlue font-semibold text-lg mt-2 text-center">
                  {record < difficulty.numLevels
                    ? "That's all you can get?"
                    : 'Can you repeat that score?'}
                </p>
              ) : (
                <p className="text-mainBlue font-semibold text-lg mt-3 text-center">
                  Hit play and discover if you are<br></br>
                  <span className="text-mainPink">a real drinker</span>!
                </p>
              )}
            </FadeIn>
            <FadeIn duration="0.5s" delay="0.6s">
              <div className="flex flex-col w-[230px] items-center">
                <MainButton text="PLAY" handleOnClick={handlePlay} />
                <Difficulty />
              </div>
            </FadeIn>
          </div>
          <div className="pb-1 mt-6">
            <p className="text-slate-500 text-sm">
              Made with 🍹 by{' '}
              <a
                className="hover:text-mainPink"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ivanherranzcuesta/"
              >
                Iván Herranz
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
