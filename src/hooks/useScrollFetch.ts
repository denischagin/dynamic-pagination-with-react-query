import { useEffect } from 'react'

export const useScrollFetch = ({
  fetch,
  isFetching,
  indent = 100,
}: IUseScrollFetchArgs) => {
  useEffect(() => {
    const handleOnScroll = () => {
      const { scrollHeight, scrollTop } = document.documentElement
      if (!isFetching && scrollHeight - scrollTop - window.innerHeight < indent)
        fetch()
    }

    document.addEventListener('scroll', handleOnScroll)

    return () => document.removeEventListener('scroll', handleOnScroll)
  }, [fetch, isFetching])
}

export interface IUseScrollFetchArgs {
  isFetching: boolean
  fetch: () => any
  indent?: number
}
