import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';


export default class AppContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: [],
      campuses: [],
      currentStudent: {},
      currentCampus: {}
    }

    this.deleteStudent = this.deleteStudent.bind(this);
    this.deleteCampus = this.deleteCampus.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.addCampus = this.addCampus.bind(this);
  }

  deleteStudent(studentId){
    axios.delete(`api/students/${studentId}/delete`)
  }

  deleteCampus(campusId){
    axios.delete(`api/campuses/${campusId}/delete`)
  }

  addStudent(name, email){
    axios.post('/api/students', {name: name, email: email})
    .then(res => res.data)
    .then(student => {
      this.setState({
        students: [...this.state.students, student]
      }, () => {
        hashHistory.push(`students/${student.id}`)
      })
    })
  }

  addCampus(name, url){
    axios.post('/api/campuses', {name: name, imageUrl: url})
    .then(res => res.data)
    .then(campus => {
      this.setState({
        campuses: [...this.state.campuses, campus]
      }, () => {
        hashHistory.push(`campuses/${campus.id}`)
      })
    })
  }

  render(){

  }


}
