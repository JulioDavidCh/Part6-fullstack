import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addNew = async (content) => {
  const anecdote = { content, votes: 0 }
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const updateVote = async (anecdote) => {
  const anecdoteUrl = `${baseUrl}/${anecdote.id}`
  const newAnecdote = {...anecdote, votes: anecdote.votes + 1}
  const response = await axios.put(anecdoteUrl, newAnecdote)
  console.log(response)
  return response.data
}

export default { getAll, addNew, updateVote }