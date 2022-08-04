import { useState } from "react";
import Axios from 'axios';

function TeacherTable() {
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");
  const [dob, setDOB] = useState("");

  const [newRegister, setNewRegister] = useState(0);

  const [studentList, setStudentList] = useState([]);

  const addStudent = () => {
    Axios.post('http://localhost:3005/create', {name: name, register: register, dob: dob}).then(()=>{
      setStudentList([...studentList, {name: name, register: register, dob: dob}])
    })
  };

  const getStudent = () => {
    Axios.get('http://localhost:3005/student').then((response)=>{
      setStudentList(response.data)
    })
  }

  const updateStudentRegister = (id) => {
    Axios.put("http://localhost:3005/update", {register: newRegister, id: id}).then((response)=>{
      setStudentList(studentList.map((val)=>{
        return val.id == id ? {id: val.id, name: val.name, register: newRegister, dob: val.dob } : val
    }))
  })
  }

  const deleteStudent = (id) => {
    Axios.delete(`http://localhost:3005/delete/${id}`).then((response) => {
      setStudentList(studentList.filter((val)=> {
        return val.id != id
      }))
    })
  }


  return (
    
        <div class="bg-gray-100 py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Teacher details
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Name
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Ahmed
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              class Teacher
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              B
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Register Number
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              101
            </dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Subject
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Socila
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Attendance
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Present
            </button>
            </dd>
          </div>
          </dl>
          </div>
          </div>
  
        </div>
      </div>
    </div>

    <div>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Add Student
        </h2>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div class="mt-1">
                <input onChange={(e) => setName(e.target.value)} id="name" name="name" type="text" autocomplete="name" required="" placeholder="lisa" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
 
            <div>
              <label for="register" class="block text-sm font-medium text-gray-700">
                Register Number
              </label>
              <div class="mt-1">
                <input onChange={(e) => setRegister(e.target.value)} id="register" name="register" type="text" autocomplete="register" required="" placeholder="11001" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="dob" class="block text-sm font-medium text-gray-700">
                DOB
              </label>
              <div class="mt-1">
                <input onChange={(e) => setDOB(e.target.value)} id="dob" name="dob" type="text" autocomplete="dob" required="" placeholder="11-11-2003" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
  
            <div>
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={addStudent}>
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
      
  <div class="flex flex-col">
  <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={getStudent}>
    Show Student
  </button>
  {studentList.map((val, key) =>{
    return  ( 
      <div class="bg-gray-100 py-6">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Register Number
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Update</span>
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200" x-max="1">
              
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {val.name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {val.register}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {val.dob}
                  </td>
                  
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <select type="text" onChange={(e) =>{ setNewRegister(e.target.value)}} placeholder="11000" class="px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-half float-left">
                    <option selected>Attendance</option>
                    <option value="P">present</option>
                    <option value="A">Absent</option>
                  </select>
                    <a href="#" onClick={()=> {updateStudentRegister(val.id)}} class="text-indigo-600 hover:text-indigo-900">Update</a>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" onClick={()=> {deleteStudent(val.id)}} class="text-indigo-600 hover:text-indigo-900">Delete</a>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div> )
  })}
    </div>
    </div>
</div>
  
    )
}

export default TeacherTable;