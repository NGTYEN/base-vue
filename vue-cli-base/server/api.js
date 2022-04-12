const express = require('express')
const app = express()

app.get('/api/courses', (req, res) => {
    // res.json([[{ name: 'web全栈', price: 89990 }, { name: 'web高级', price: 899 }]])
    setTimeout(() => {
        res.json([{ id: 1, name: 'web全栈', price: 99000 }, { id: 2, name: 'web高级', price: 899 }])
    }, 100)
})

app.listen(3000)