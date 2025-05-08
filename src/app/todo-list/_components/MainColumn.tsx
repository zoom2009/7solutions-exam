"use client"

import { TTodo } from "@/constants/todoListData"
import { useTodoListStore } from "@/stores/useTodoListStore"
import { twMerge } from "tailwind-merge"

const classNames = {
  container: twMerge(`flex flex-col gap-2 w-full`),
  item: twMerge(`w-full text-center py-2 border border-gray-600 rounded-md hover:bg-gray-200 duration-100 transition-all`),
}

const MainColumn = () => {
  const mainList = useTodoListStore(props => props.mainList)
  const addTodo = useTodoListStore(props => props.addTodo)
  const removeTodo = useTodoListStore(props => props.removeTodo)

  const handleAdd = (todo: TTodo) => () => {
    addTodo(todo)
    setTimeout(() => {
      const currentMainList = useTodoListStore.getState().mainList
      if (currentMainList.has(todo.name)) return;
      removeTodo(todo)
    }, 5000)
  }

  return (
    <div className={classNames.container}>
      {Array.from(mainList.values()).map((todo) => (
        <button
          key={todo.name}
          className={classNames.item}
          onClick={handleAdd(todo)}
        >
          {todo.name}
        </button>
      ))}
    </div>
  )
}

export default MainColumn
