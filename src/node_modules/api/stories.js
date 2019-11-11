import * as api from './api'

export function getStories (params) {
  return api.get('/stories', params)
}

export function createStory ({ story, token }) {
  return api.post('/stories', story, token)
}

export function updateStory ({ storyId, story, token }) {
  return api.put(`/stories/${storyId}`, story, token)
}

export function getStory ({ storyId }) {
  return api.get(`/stories/${storyId}`)
}

export function deleteStory ({ storyId, token }) {
  return api.del(`/stories/${storyId}`, token)
}

export function getStoryComments ({ storyId }) {
  return api.get(`/stories/${storyId}/comments`)
}

export function addComment ({ storyId, comment, token }) {
  return api.post(`/stories/${storyId}/comments`, comment, token)
}

export function upvoteStory ({ storyId }) {
  return api.post(`/stories/${storyId}/upvote`)
}

export function upvoteComment ({ storyId, commentId }) {
  return api.post(`/stories/${storyId}/comments/${commentId}/upvote`)
}
