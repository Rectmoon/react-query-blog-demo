import React from 'react'
import { useParams } from 'react-router-dom'
import usePost from '../../hooks/usePost'

export default function PostBody () {
  const { postId } = useParams()
  const postQuery = usePost(postId)

  return <div>{postQuery.isLoading ? 'loading' : postQuery.data.body}</div>
}
