import { Progress, Stack } from '@chakra-ui/react'
import { CommentItem } from '../CommentItem/CommentItem'
import { useGetCommentsInfiniteQuery } from '../../hooks/useGetCommetsInfiniteQuery'
import { useScrollFetch } from '../../hooks/useScrollFetch'

export const CommentList = () => {
  const { data, fetchNextPage, isFetchingNextPage } =
    useGetCommentsInfiniteQuery()

  useScrollFetch({
    fetch: fetchNextPage,
    isFetching: isFetchingNextPage,
  })

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
