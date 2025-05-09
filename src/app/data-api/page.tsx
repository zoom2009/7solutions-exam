import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from '@/providers/_functions/getQueryClient'
import { getUsers } from './queries'
import DisplayUsers from './_components/DisplayUsers'

const DataAPI = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DisplayUsers />
    </HydrationBoundary>
  )
}

export default DataAPI
