import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

function Admin() {

const [tital, SetTital] = useState("");
const [img, SetImg] = useState("");
const [vdo, SetVdo] = useState("");
const [name, SetName] = useState("");
const [des, SetDes] = useState("");
const [commaent, SetComment] = useState("");

const [posts, setPosts] = useState([]);

const addPost = () => {

Axios.post('http://localhost:3001/Add', {
      tital: tital,
      img: img,
      vdo: vdo,
      name: name,
      des: des,
      commaent: commaent,
}).then()
};




  return (
    <> 

<div className="container">


  <form action="">
  <div class="mb-3">
  <input type="text" class="form-control" id="tital" placeholder="tital" onChange={(event) => SetTital(event.target.value)} />


</div>
<div class="mb-3">

  <input type="file" class="form-control" id="img" placeholder="img" onChange={(event) => SetImg(event.target.value)} />
</div>
<div class="mb-3">

  <input type="text" class="form-control" id="vdo" placeholder="vdo" onChange={(event) => SetVdo(event.target.value)} />
</div>
<div class="mb-3">

  <input type="text" class="form-control" id="name" placeholder="name" onChange={(event) => SetName(event.target.value)} />
</div>
<div class="mb-3">
  
  <input type="text" class="form-control" id="des" placeholder="des" onChange={(event) => SetDes(event.target.value)} />
</div>
<div class="mb-3">

  <input type="text" class="form-control" id="commaent" placeholder="commaent" onChange={(event) => SetComment(event.target.value)} />
  </div>
  <button type="submit" onClick={addPost}>Submit</button>



  </form>



  </div>

 
 



      
    </>
  )
}

export default Admin
