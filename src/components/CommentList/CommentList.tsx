import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import CommentService from '../../services/CommentService'
import { Progress, Stack } from '@chakra-ui/react'
import { CommentItem } from '../CommentItem/CommentItem'

export const CommentList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: ({ pageParam }) => CommentService.getAllComments(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _pages, lastPageParam) => lastPageParam + 1,
  })

  useEffect(() => {
    const handleOnScroll = () => {
      const { scrollHeight, scrollTop } = document.documentElement
      if (
        !isFetchingNextPage &&
        scrollHeight - scrollTop - window.innerHeight < 100
      )
        fetchNextPage()
    }

    document.addEventListener('scroll', handleOnScroll)

    return () => document.removeEventListener('scroll', handleOnScroll)
  }, [fetchNextPage, isFetchingNextPage])

  return (
    <Stack>
      {data?.pages.map((page) =>
        page.map(({ body, email, id, name }) => (
          <CommentItem
            key={id}
            id={id}
            body={body}
            email={email}
            name={name}
          />
        )),
      )}

      {isFetchingNextPage && (
        <Progress
          isIndeterminate
          size="xs"
          my={5}
        />
      )}
    </Stack>
  )
}
