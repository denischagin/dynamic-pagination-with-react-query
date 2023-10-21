import { useInfiniteQuery } from '@tanstack/react-query'
import CommentService from '../services/CommentService'

export const useGetCommentsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: ({ pageParam }) => CommentService.getAllComments(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _pages, lastPageParam) => lastPageParam + 1,
  })
}
