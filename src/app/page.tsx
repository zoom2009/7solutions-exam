import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const classNames = {
  container: twMerge(`page-container justify-center items-center `),
  title: twMerge(`text-3xl sm:text-4xl md:text-5xl text-background mb-12 font-bold text-center`),
  buttonContainer: twMerge(`flex items-center gap-4 flex-col sm:flex-row`),
  button: twMerge(`px-5 py-3 font-bold bg-blue-400 hover:bg-blue-500 duration-150 transition-all rounded-md text-white`),
}

const HomePage = () => {
  return (
    <div className={classNames.container}>
      <h1 className={classNames.title}>7Solutions Exam</h1>
      <div className={classNames.buttonContainer}>
        <Link className={classNames.button} href="/todo-list">
          Auto Delete Todo List
        </Link>
        <Link className={classNames.button} href="/data-api">
          Create data from API 
        </Link>
      </div>
      <p className="text-center mt-8 text-sm text-gray-700">
        Test By: Sikarin Poonsawat (Fu)
      </p>
    </div>
  )
}

export default HomePage
