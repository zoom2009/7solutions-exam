"use client"

import { TTodo } from "@/constants/todoListData"
import { useTodoListStore } from "@/stores/useTodoListStore"
import { twMerge } from "tailwind-merge"

const classNames = {
  container: twMerge(`flex flex-col gap-2 w-full border border-gray-400 h-full pb-2`),
  header: twMerge(`font-medium text-center w-full bg-gray-300 py-4 border-b border-b-gray-400`),
  item: twMerge(`text-center py-2 border border-gray-600 rounded-md w-11/12 mx-auto`),
}

const VegetableColumn = () => {
  const vegetableList = useTodoListStore(props => props.vegetableList)
  const removeTodo = useTodoListStore(props => props.removeTodo)

  const handleRemove = (todo: TTodo) => () => {
    removeTodo(todo)
  }

  return (
    <div className={classNames.container}>
      <h2 className={classNames.header}>Vegetables</h2>
      {Array.from(vegetableList.values()).map((todo) => (
        <button
          key={todo.name}
          className={classNames.item}
          onClick={handleRemove(todo)}
        >
          {todo.name}
        </button>
      ))}
    </div>
  )
}

export default VegetableColumn
