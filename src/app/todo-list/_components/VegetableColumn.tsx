"use client"

import { twMerge } from "tailwind-merge"

const classNames = {
  container: twMerge(`flex flex-col gap-2 w-full border border-gray-400 h-full pb-2`),
  header: twMerge(`font-medium text-center w-full bg-gray-300 py-4 border-b border-b-gray-400`),
  item: twMerge(`w-full text-center py-2 border border-gray-600 rounded-md`),
}

const VegetableColumn = () => {
  return (
    <div className={classNames.container}>
      <h2 className={classNames.header}>Vegetables</h2>
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

export default VegetableColumn
