import {BrowserRouter , Routes , Route}  from 'react-router-dom'
  
import SignIn from './pages/SignIn';
import Instructorpage from './pages/Instructor/Instructorpage'; 
import AddAdministrator from './pages/Admin/AddAdministrator';
import AddInstructor from './pages/Admin/AddInstructor';
import AddCorporateTrainees from './pages/Admin/AddCorporateTrainees';
import Contract from './pages/Instructor/Contract';
import CoursePreview from './pages/Instructor/CoursePreview';
import Editsubtitle from './pages/Instructor/Editsubtitle';
import Filtercourses from './pages/Instructor/Filtercourses';
import Promotion from './pages/Instructor/Promotion';
import Forgetpass from './pages/Forgetpass';
import Changepass from './pages/Changepass';
import ViewCourseRatingsReviews from './pages/Instructor/ViewCourseRatingsReviews';
import ViewPersonalRatingsReviews from './pages/Instructor/viewPersonalRatingsReviews';
import Filtercoursesubjectinstructor from './pages/Instructor/Filtercoursesubjectinstructor';
import LandingPage from './pages/LandingPage';
import CreateQuestion from './pages/CreateQuestion';
import Createcourse from './pages/Instructor/Createcourse';
import Editbio from './pages/Instructor/Editbio';
import CoursesTitles from './pages/Instructor/CoursesTitles';
import Signup from './pages/Signup';
import Policies from './pages/Policies';
import Allcourses from './pages/Trainees/AllCourses';
import Welcome from './pages/Welcome';
import MostViewed from './pages/MostViewed';
import AdminLogin from './pages/Login/AdminLogin';
import IndividualLogin from './pages/Login/IndividualLogin';
import InstructorLogin from './pages/Login/InstructorLogin';
import CorporateLogin from './pages/Login/CorporateLogin';
import Requests from './pages/Admin/Requests';
import NestedList from './pages/Admin/Adminpage';
import Addsub from './pages/Instructor/Addsub';
import Exam from './pages/Exam';
import InstructorExam from './pages/InstructorExam';
import Exercise from './components/Exercise'
import Certificate from './pages/Course/Certificate';
import CourseSub from './pages/Course/CourseSub';
import RefundDiv from './components/Refund/RefundDiv';
import Ticket from './components/Ticket';
import CourseVideo from './pages/Course/CourseVideo'
import Allecourses from './pages/Allecourses'
import Tickets from './pages/Admin/Tickets'
import TraineeHome from'./pages/Trainees/TraineeHome';
import TraineeCourse from './pages/Trainees/TraineeCourse';
import SearchCourses from './pages/Trainees/SearchCourses';
import CourseDetails from './pages/Course/CourseDetails';
import { red } from '@mui/material/colors';
import CourseTickets from './pages/Course/CourseTickets';
import RateInstructor from "./components/RateInstructor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>

          <Route path ="/" element ={<Welcome />}/>
          <Route path ="/adminpage" element ={<NestedList />}/>
          <Route path ="/AdminLogin" element ={<AdminLogin />}/>
          <Route path ="/CorporateLogin" element ={<CorporateLogin />}/>
          <Route path ="/IndividualLogin" element ={<IndividualLogin />}/>
          <Route path ="/InstructorLogin" element ={<InstructorLogin />}/>
          <Route path ="/AddInstructor" element ={<AddInstructor />}/>
          <Route path ="/addsub" element ={<Addsub />}/>
          <Route path ="/AddCorporateTrainees" element ={<AddCorporateTrainees />}/>
          <Route path ="/CourseExercise" element ={<Exercise />}/>
          <Route path ="/TraineeCourse" element ={<TraineeCourse />}/>
          <Route path ="/TraineeHome" element ={<TraineeHome />}/>
          <Route path ="/AllCourses" element ={<Allcourses />}/>
          <Route path ="/SearchCourse" element ={<SearchCourses />}/>
          <Route path ="/CourseSub" element ={<CourseSub />}/>
          <Route path ="/CourseVideo" element ={<CourseVideo />}/>
          <Route path ="/Certificate" element ={<Certificate />}/>
          <Route path ="/AllTickets" element ={<CourseTickets />}/>
          <Route path ="/Rate" element ={<RateInstructor />}/>
          
         

          <Route path ="/mostviewed" element ={<MostViewed />}/>
          <Route path ="/addadmin" element ={<AddAdministrator />}/>
          <Route path ="/contract" element ={<Contract />}/>
          <Route path ="/requests" element ={<Requests />}/>
          <Route path ="/landingpage" element ={<LandingPage />}/>
          <Route path ="/CoursesTitles" element ={<CoursesTitles />}/>
          <Route path ="/createcourse" element ={<Createcourse />}/>
          <Route path ="/coursepreview" element ={<CoursePreview />}/>
          <Route path ="/ticket" element ={<Ticket />}/>
            <Route path='/' element={<Welcome />} />
            <Route path='/adminpage' element={<NestedList />} />
            <Route path='/instructorpage' element={<Instructorpage />} />
            <Route path='/AdminLogin' element={<AdminLogin />} />
            <Route path='/CorporateLogin' element={<CorporateLogin />} />
            <Route path='/IndividualLogin' element={<IndividualLogin />} />
            <Route path='/InstructorLogin' element={<InstructorLogin />} />
            <Route path='/AddInstructor' element={<AddInstructor />} />
            <Route path='/AddCorporateTrainees' element={<AddCorporateTrainees />} />
            <Route path='/allecourses' element={<Allecourses />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/CourseExercise' element={<Exercise />} />
            <Route path='/TraineeCourse' element={<TraineeCourse />} />
            <Route path='/TraineeHome' element={<TraineeHome />} />
            <Route path='/SearchCourse' element={<SearchCourses />} />
            <Route path='/CourseSub' element={<CourseSub />} />
            <Route path='/CourseVideo' element={<CourseVideo />} />
            <Route path='/addadmin' element={<AddAdministrator />} />
            <Route path='/contract' element={<Contract />} />
            <Route path='/requests' element={<Requests />} />
            <Route path='/landingpage' element={<LandingPage />} />
            <Route path='/CoursesTitles' element={<CoursesTitles />} />
            <Route path='/createcourse' element={<Createcourse />} />
            <Route path='/coursepreview' element={<CoursePreview />} />
            <Route path='/Editsubtitle' element={<Editsubtitle />} />
            <Route path='/editbio' element={<Editbio />} />
            <Route path='/signup' element={<Signup />} />

          <Route path ="/Editsubtitle" element ={<Editsubtitle />}/>
          <Route path ="/editbio" element ={<Editbio />}/>
          <Route path ="/signup" element ={<Signup />}/>
          <Route path ="/allcourses" element ={<Allcourses />}/>
          <Route path ="/Policies" element ={<Policies />}/>
          <Route path ="/filtercourses" element ={<Filtercourses />}/>
          <Route path ="/Filtercoursesubjectinstructor" element ={<Filtercoursesubjectinstructor />}/>
          <Route path ="/promotion" element ={<Promotion />}/>
          <Route path ="/forgetpass" element ={<Forgetpass />}/>
          <Route path ="/changepass/:type/:username" element ={<Changepass />}/>
          <Route path ="/ViewCourseRatingsReviews" element ={<ViewCourseRatingsReviews />}/>
          <Route path ="/ViewPersonalRatingsReviews" element ={<ViewPersonalRatingsReviews />}/>

        </Routes>


      </div>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
