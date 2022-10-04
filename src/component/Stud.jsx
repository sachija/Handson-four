import React from "react";

const Students = () =>{
    
    return(
        <div>
               {/* <p id="Title">
              <Link className="head1" to ="/">Ho</Link>              
              <Link className="head1" to ="/Stud">Students</Link>  
              <Link className="head1" to ="/Cont">Contact Us</Link>  
                
            </p>  */}
             <h1 id="details_stud"> Details of Students</h1>
             <button id="add">Add</button>
             <table border = '4' color="pink">
               <thead>
               <tr>
                    <th className="row">Name Of The Students</th>
                    <th>Age</th>
                    <th>Education</th>
                    <th>Pass out Year</th>
                    <th>Edit</th>
                </tr>
                <tr>
                    <td>pooja</td>
                    <td >25</td>
                    <td>M.tech</td>
                    <td>2020</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>sachin</td>
                    <td>27</td>
                    <td>b.sc Maths</td>
                    <td>2020</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Mayur</td>
                    <td>26</td>
                    <td>BE.Electrical</td>
                    <td>2022</td>
                    <td>edit</td>
                </tr>
                <tr>
                    <td>Atharva</td>
                    <td>23</td>
                    <td>MSC.maths</td>
                    <td>2022</td>
                    <td>edit</td>
                </tr>
                
               </thead>
              
             </table>
         
       
        </div>
    )
}
export default Students;