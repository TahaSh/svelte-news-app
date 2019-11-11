export async function post (req, res) {
  delete req.session.user
  res.end(JSON.stringify({ message: 'success!' }))
}
