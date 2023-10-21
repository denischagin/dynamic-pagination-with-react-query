import { ChakraProvider } from '@chakra-ui/react'
import { CommentList } from './components/CommentList/CommentList'

const App = () => {
  return (
    <ChakraProvider>
      <CommentList />
    </ChakraProvider>
  )
}

export default App
