
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CourseDiv } from '../Course/CourseDiv'
import Avatar from '@mui/material/Avatar'
import EditIcon from '@mui/icons-material/Edit'

import './TraineesHome.css'

export function TraineeHome () {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [details, setDetails] = useState('')
  const[user,setUser]=useState(localStorage.getItem('userName'));
  const [type,setType]=useState(localStorage.getItem('role'));

  const [countryNumber, setCountryNumber] = useState()
  const handleCountryNumber = (x) => {
    setCountryNumber(x)
  }
  const handleAll=()=>{
   navigate('/AllCourses');

  }
  

    const getCourses= async (user)=>{
     const response = await fetch('http://localhost:7000/api/getcoursesembeddedIndividual',{
       method:"POST",
       headers:{
          "content-type":"application/json; charset=UTF-8"
   
   
       },
       body:JSON.stringify({
          userName:user
          
   
   
       })
     });
         const json = await response.json()
         return json;
     }
     const getCourses2= async (user)=>{
      const response = await fetch('http://localhost:7000/api/getcoursesembeddedCorporate',{
        method:"POST",
        headers:{
           "content-type":"application/json; charset=UTF-8"
    
    
        },
        body:JSON.stringify({
           userName:user
           
    
    
        })
      });
          const json = await response.json()
          return json;
      }

  const getDetails = async (user,b) => {
    const response = await fetch('http://localhost:7000/api/getDetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: user,
        type:b
      })
    })
    const json = await response.json()
    return json
  }

  useEffect(() => {
    async function getCoursess () {
      setCourses((await getCourses(user)))
    }
    async function getDetailss () {
      setDetails(await getDetails(user,type))
    }
    async function getCoursess2 () {
      setCourses(await getCourses2(user))
    }

    if(type=="individual user")
        getCoursess()
    else 
        getCoursess2()

    getDetailss()
  },[courses,details] );






  return (
    <div className='Whole'>
      <div className='rowHomeTrainee'>
      <h2 className='headerHome'>My Courses</h2>
      <button className='buttonAll' onClick={handleAll}>view All Courses</button>
      </div>
      <div className='mainDetailsTrainee'>
        <div className='homeCoursesTrainee'>
          {courses.map((course) => <CourseDiv course={course} country={0} Details={type=="individual user"}/>)}

        </div>

        <div className='traineeDitails'>
          <Avatar
            className='TraineeAvatar'
            sx={{ backgroundColor: '#0277bd', width: 100, height: 100, fontSize: 55 }}
          >

            {/* {instructor && instructor.Name.substring(0,1)+instructor.Name.split(" ")[1].substring(0,1)} */}

          </Avatar>
          <h5 className='traineeName'>{details.userName}</h5>
          <h5 className='traineeEmail'>{details.email}</h5>
          <EditIcon className='T-editIconClick' />

        </div>
      </div>
    </div>
  )
} export default TraineeHome
