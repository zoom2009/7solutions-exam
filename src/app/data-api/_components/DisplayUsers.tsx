"use client"

import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../queries"
import transformUsers from "../_functions/transformUsers"

const DisplayUsers = () => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: (data) => {
      const transformedUsers = transformUsers(data)
      return transformedUsers
    },
  })

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default DisplayUsers
