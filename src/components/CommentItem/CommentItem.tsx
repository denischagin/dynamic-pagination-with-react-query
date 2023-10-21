import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import { CommentItemProps } from './CommentItem.interface'

export const CommentItem = ({ body, email, name }: CommentItemProps) => {
  return (
    <Card>
      <CardHeader>
        <Heading>
          {email} {name}
        </Heading>
      </CardHeader>

      <CardBody>
        <Text>{body}</Text>
      </CardBody>
    </Card>
  )
}
