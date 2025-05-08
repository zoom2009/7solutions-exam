"use client"

import { twMerge } from "tailwind-merge"

const classNames = {
  container: twMerge(`flex flex-col gap-2 w-full`),
  item: twMerge(`w-full text-center py-2 border border-gray-600 rounded-md hover:bg-gray-200 duration-100 transition-all cursor-pointer`),
}

const MainColumn = () => {
  return (
    <div className={classNames.container}>
      {[].map(({ name }) => (
        <div
          key={name}
          className={classNames.item}
        >
          {name}
        </div>
      ))}
    </div>
  )
}

export default MainColumn
