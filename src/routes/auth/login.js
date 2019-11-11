import * as api from 'api'

export async function post (req, res) {
  const user = req.body
  try {
    const userData = await api.users.login(user)
    req.session.user = userData
    res.end(JSON.stringify(userData))
  } catch (err) {
    res.statusCode = err.status
    res.end(JSON.stringify(err))
  }
}
