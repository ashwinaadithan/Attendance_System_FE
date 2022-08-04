import { useState } from "react";
import Axios from 'axios';

function Register() {
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");
  const [section, setSection] = useState("");
  //const [subject, setSubject] = useState("");
  const [password, setPassword] = useState("")


  const addTeacher = () => {
    Axios.post('http://localhost:3005/new', {name: name, register: register, section: section, password: password})
    .then(()=>{console.log("success")})
    
  };
  return(

      <div>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
      </div>
  
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div class="mt-1">
                <input onChange={(e) => setName(e.target.value)}id="name" name="name" type="text" autocomplete="name" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="register" class="block text-sm font-medium text-gray-700">
                Register Number
              </label>
              <div class="mt-1">
                <input onChange={(e) => setRegister(e.target.value)}id="register" name="register" autocomplete="register" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="section" class="block text-sm font-medium text-gray-700">
                Section
              </label>
              <div class="mt-1">
                <input onChange={(e) => setSection(e.target.value)}id="section" name="section" type="text" autocomplete="section" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

              {/* <div class="col-span-6 sm:col-span-3">
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <select onChange={(e) => setSubject(e.target.value)}id="subject" name="subject" autocomplete="subject" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option value={Maths}>Maths</option>
                  <option value={Science}>Science</option>
                  <option value={fSocial}>Social</option>
                  <option value={English}>English</option>
                </select>
  </div> */ }
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
  
            <div>
              <a onClick={addTeacher} type="submit" href="/" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  
    </div>
    )
  }
  
  export default Register;