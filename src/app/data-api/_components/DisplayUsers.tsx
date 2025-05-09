"use client"

import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../queries"
import transformUsers from "../_functions/transformUsers"

// NOTE: normally this ui no need to use client but for complex ui will be client component
// This is Example way to keep good seo for data fetching and ui activity with user (like onClick)

const DisplayUsers = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    select: (data) => {
      const transformedUsers = transformUsers(data)
      return transformedUsers
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <pre data-testid="data-api-display">
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default DisplayUsers
