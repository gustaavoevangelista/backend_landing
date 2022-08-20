const express = require('express')
const cors = require('cors')
const db = require('../database/landing_db')

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
	console.log(`Server running at port:${PORT}`)
})