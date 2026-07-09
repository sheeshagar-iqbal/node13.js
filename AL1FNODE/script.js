const baseurl = "http://localhost:4000/api/student";
let currentpage =1;
let currentsearch =''

// view all student
async function fetchstudent(search = "",page =1) {
  currentpage =page;
  currentsearch =search
  const res = await fetch(`${baseurl}?search=${encodeURIComponent(search)}&page=${page}&limit=${4}`);
  const data = await res.json();
  //    console.log((data));

 
  const tbody = document.getElementById("studentTableBody");
  tbody.innerHTML = "";
  //
  data.student.forEach((student) => {
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
        `;

        
  });
  renderpagination(data.totalPage)
}

fetchstudent();



function renderpagination(totalpages){
    const container = document.getElementById('pagination')
    container.innerHTML =''
    // pre button
     const pre =document.createElement('li')
      pre.className ='page-item' + (currentpage===1?' disabled':' ')
      pre.innerHTML =`<a class="page-link",href='#' >previous</a>`
      pre.addEventListener("click",(e)=>{
        e.preventDefault()
        fetchstudent(currentsearch,currentpage-1)
      })
      container.appendChild(pre)
      // number
    for (let i = 1; i <= totalpages; i++) {
      const li =document.createElement('li')
      li.className ='page-item' + (currentpage===i?' active':' ')
      li.innerHTML =`<a class="page-link",href='#'>${i}</a>`
      li.addEventListener("click",(e)=>{
        e.preventDefault()
        fetchstudent(currentsearch,i)
      })
      container.appendChild(li)
    }
    // next buutton
     const next =document.createElement('li')
      next.className ='page-item' + (currentpage===totalpages?' disabled':' ')
      next.innerHTML =`<a class="page-link",href='#' >next</a>`
      next.addEventListener("click",(e)=>{
        e.preventDefault()
        fetchstudent(currentsearch,currentpage+1)
      })
      container.appendChild(next)
}


async function viewStudent(id) {
  const res = await fetch(`${baseurl}/${id}`);
  const student = await res.json();
  console.log(student);

  document.getElementById("viewProfilePic").src =
    "http://localhost:4000/uploads/${student.profile_pic}";
  document.getElementById("viewName").textContent =
    `${student.first_name} ${student.last_name}`;
  document.getElementById("viewEmail").textContent = student.email;
  document.getElementById("viewPhone").textContent = student.phone;
  document.getElementById("viewGender").textContent = student.gender;

  new bootstrap.Modal(document.getElementById("viewStudentModal")).show();
}

// searchInput

const search = document.getElementById("searchInput");
search.addEventListener("input", () => {
  fetchstudent(document.getElementById("searchInput").value);
});

// add student
 document
  .getElementById("addStudentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const formdata = new FormData(this);

    const res = await fetch(`${baseurl}`,{
      method:"POST",
      body:formdata
    })
  // const data = await res.json();
  //   console.log(data);
    if(res.ok){
      this.reset()
    bootstrap.Modal.getInstance(document.getElementById('addStudentModal')).hide()
    fetchstudent()
    }else{
    //    console.log(res.status); // 400
    //   console.log(data); // Error message from backend
      alert('Error creating student')
    }
  });


  // delete student  


   async function deleteStudent(id){
        if (confirm('are you sure delete the student')){
          await fetch(`${baseurl}/${id}`,{
            method:"DELETE"
          })
          fetchstudent()
        }
  }



  // update student
 async function editStudent(id){
          const res =await fetch(`${baseurl}/${id}`)
          const data =await res.json()
          console.log(data);
          
          document.getElementById('editStudentId').value =data._id
          document.getElementById('editFirstName').value =data.first_name
          document.getElementById('editLastName').value =data.last_name
          document.getElementById('editEmail').value =data.email
          document.getElementById('editGender').value =data.gender 
          document.getElementById('editPhone').value =data.phone


          new bootstrap.Modal(document.getElementById("editStudentModal")).show();

 }

 document
  .getElementById("editStudentForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
        const editid=  document.getElementById('editStudentId').value

    const formdata = new FormData(this);

    const res = await fetch(`${baseurl}/${editid}`,{
      method:"PUT",
      body:formdata
    })

    if(res.ok){
      // this.reset()
    bootstrap.Modal.getInstance(document.getElementById('editStudentModal')).hide()
    fetchstudent()
    }else{
    //    console.log(res.status); // 400
    //   console.log(data); // Error message from backend
      alert('Error creating student')
    }
  });