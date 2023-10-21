import axios from 'axios'
import { IComment } from '../models/comment'

class CommentService {
  getAllComments = async (page: number) => {
    const response = await axios.get<IComment[]>(
      'https://jsonplaceholder.typicode.com/comments',
      {
        params: {
          _page: page,
        },
      },
    )
    return response.data
  }
}

export default new CommentService()
