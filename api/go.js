export default function handler(req, res) {
  const url = process.env.DEV_URL
  if (!url) {
    res.status(404).end()
    return
  }
  res.redirect(302, url)
}
