 const baseurl ='http://localhost:4000/api/student'

    // view all student
    async function fetchstudent(search='') {
       const res= await fetch(`${baseurl}?search=${encodeURIComponent(search)}`)
       const data= await res.json()
    //    console.log((data));
       
       const tbody=document.getElementById('studentTableBody')
       tbody.innerHTML ='';
// 
       data.forEach(student => {
        // console.log(student);
        
        tbody.innerHTML += `
        <tr>
          <td><img src="http://localhost:4000/uploads/${student.profile_pic}" width="50" height="50" class="rounded-circle" /></td>
          
          <td>${student.first_name}</td>
          <td>${student.last_name}</td>
          <td>${student.email}</td>
          <td>${student.phone}</td>
          <td>${student.gender}</td>
          <td>
            <button class="btn btn-info btn-sm" onclick="viewStudent('${student._id}')">View</button>
            <button class="btn btn-warning btn-sm" onclick="editStudent('${student._id}')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent('${student._id}')">Delete</button>
          </td>
        </tr>
        `
        
       });
    }


document.addEventListener("DOMContentLoaded", () => {
    fetchstudent();
});


async function  viewStudent(id) {
   const res= await fetch(`${baseurl}/${id}`)
       const student= await res.json()
       console.log((student));

       document.getElementById('viewProfilePic').src ="http://localhost:4000/uploads/${student.profile_pic}"
       document.getElementById('viewName').textContent =  `${student.first_name} ${student.last_name}`
       document.getElementById('viewEmail').textContent =  student.email
       document.getElementById('viewPhone').textContent =  student.phone
       document.getElementById('viewGender').textContent =  student.gender

       new bootstrap.Modal(document.getElementById('viewStudentModal')).show()
}



// searchInput

const search =document.getElementById('searchInput')
search.addEventListener('input',()=>{
    fetchstudent(document.getElementById('searchInput').value)
})