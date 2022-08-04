import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from './components/login';
import RegisterForm from './components/register';
import TeacherInfo from './components/teacher-info';
import TeacherTable from './components/teacher-table';
import AttendanceToggle from './components/attendance-toggle';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<LoginForm />} />
    <Route exact path="/register" element={<RegisterForm />} />
    <Route exact path="/teacherinfo" element={<TeacherInfo />} />
    <Route exact path="/table" element={<TeacherTable />} />
    <Route exact path="/toggle" element={<AttendanceToggle />} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
