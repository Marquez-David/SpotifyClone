'use client'

import BackButton from "../Buttons/BackButton"
import FordwardButton from "../Buttons/FordwardButton"

const HomeHeader = () => (
  <header className="bg-background-base flex flex-row justify-between p-5 items-center">

    <div className="space-x-2">
      <BackButton />
      <FordwardButton />
    </div>

  </header>
)

export default HomeHeader