import todoListData, { TTodo } from '@/constants/todoListData'
import { create } from 'zustand'

interface ITodoListStore {
  mainList: Map<string, TTodo>
  fruitList: Map<string, TTodo>
  vegetableList: Map<string, TTodo>
  addTodo: (todo: TTodo) => void
  removeTodo: (todo: TTodo) => void
}

export const useSidebarStore = create<ITodoListStore>((set) => ({
  mainList: new Map(todoListData.map(item => [item.name, item])),
  fruitList: new Map(),
  vegetableList: new Map(),
  addTodo: (todo) => {
    set((state) => {
      const newMainList = new Map(state.mainList)
      newMainList.delete(todo.name)

      if (todo.type === "Fruit") {
        const newFruitList = new Map(state.fruitList)
        newFruitList.set(todo.name, todo)
        return {
          mainList: newMainList,
          fruitList: newFruitList,
        }
      } else if (todo.type === "Vegetable") {
        const newVegetableList = new Map(state.vegetableList)
        newVegetableList.set(todo.name, todo)
        return {
          mainList: newMainList,
          vegetableList: newVegetableList,
        }
      }
      return {}
    })
  },
  removeTodo: (todo) => {
    set((state) => {
      const newMainList = new Map(state.mainList)
      newMainList.set(todo.name, todo)

      if (todo.type === "Fruit") {
        const newFruitList = new Map(state.fruitList)
        newFruitList.delete(todo.name)
        return {
          mainList: newMainList,
          fruitList: newFruitList,
        }
      } else if (todo.type === "Vegetable") {
        const newVegetableList = new Map(state.vegetableList)
        newVegetableList.delete(todo.name)
        return {
          mainList: newMainList,
          vegetableList: newVegetableList,
        }
      }
      return {}
    })
  },
}))
