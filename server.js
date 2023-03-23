const os = require("os")
const port = process.env.PORT || 5000
const app = require("express")()

app.get("/", (req, res) => {
    res.json({ cpus: os.cpus(), osType: os.version() })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})