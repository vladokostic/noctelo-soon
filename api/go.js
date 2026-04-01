export default function handler(req, res) {
  if (req.headers['x-owner'] !== 'true') {
    return res.status(404).end()
  }
  res.json({ url: process.env.DEV_URL })
}