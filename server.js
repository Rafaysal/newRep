const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('kill the spare! AVADA KEDAVRA'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))