require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      app = express(),
      path = require('path'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

//middleware
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB Connected')
    app.listen(SERVER_PORT, ()=> console.log(`Server running on ${SERVER_PORT}`))
})

