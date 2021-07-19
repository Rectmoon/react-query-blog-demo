import React from 'react'

import PostTitle from './PostTitle'
import PostBody from './PostBody'

// import { useParams } from 'react-router-dom'
// import usePost from '../../hooks/usePost'

export default function Post() {
  // const { postId } = useParams()
  // const postQuery = usePost(postId)

  return (
    <>
      <PostTitle />
      <PostBody />

      {/* {postQuery.isLoading ? (
        <span>Loading...</span>
      ) : postQuery.isError ? (
        postQuery.error.message
      ) : (
        <div>
          <h2>{postQuery.data.title}</h2>
          <p>{postQuery.data.body}</p>
        </div>
      )} */}
    </>
  )
}
