'use strict'
const api = require('express').Router()
const db = require('../db')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/students', (req, res, next) => {
  Student.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

api.get('/campuses', (req, res, next) => {
  Campus.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

api.get('/students/:studentid', (req, res, next) => {
  Student.findById(req.params.studentid)
  .then(res.send.bind(res))
  .catch(next)
})

api.get('/campuses/:campusid', (req, res, next) => {
  Campus.findById(req.params.campusid)
  .then(res.send.bind(res))
  .catch(next)
})

api.post('students/create', (req, res, next) => {
  Student.create(req.body)
  .then(res.send.bind(res))
  .catch(next)
})

api.post('/campuses/create', (req, res, next) => {
  Campus.create(req.body)
  .then(res.send.bind(res))
  .catch(next)
})

api.put('/students/:studentid/edit', (req, res, next) => {
  Student.findById(req.params.studentid)
  .then((student) => {
    return student.update(req.body)
  })
  .then(res.send.bind(res))
  .catch(next)
})

api.put('/campuses/:campusid/edit', (req, res, next) => {
  Campus.findById(req.params.campusid)
  .then((campus) => {
    return campus.update(req.body)
  })
  .then(res.send.bind(res))
  .catch(next)
})

api.delete('/students/:studentid', (req, res, next) => {
  Student.findById(req.params.id)
  .then((student) => {
    return student.destroy()
  })
  .then(res.redirect('/'))
  .catch(next)
})

api.delete('/campuses/:campusid', (req, res, next) => {
  Campus.findById(req.params.id)
  .then((campus) => {
    return campus.destroy()
  })
  .then(res.redirect('/'))
  .catch(next)
})

module.exports = api
