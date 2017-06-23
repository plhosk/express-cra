import 'babel-polyfill'
// import favicon from 'serve-favicon'
import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 5000

// app.use(favicon(path.join(__dirname, '/../public/favicon.ico')))

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../app/build')))

// Answer API requests.
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.send('{"message":"Hello from the custom server!"}')
})

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../app/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`) // eslint-disable-line
})
