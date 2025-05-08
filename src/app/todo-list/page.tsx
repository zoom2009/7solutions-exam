"use client"

import { twMerge } from "tailwind-merge"
import MainColumn from "./_components/MainColumn"
import FruitColumn from "./_components/FruitColumn"
import VegetableColumn from "./_components/VegetableColumn"

const classNames = {
  wrapper: 'page-container',
  container: twMerge(`grid grid-cols-3 justify-center items-start h-full`),
  column: twMerge(`p-4 h-full`),
}

const TodoListPage = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.container}>
        <div className={classNames.column}>
          <MainColumn />
        </div>
        <div className={classNames.column}>
          <FruitColumn />
        </div>
        <div className={classNames.column}>
          <VegetableColumn />
        </div>
      </div>
    </div>
  )
}

export default TodoListPage
