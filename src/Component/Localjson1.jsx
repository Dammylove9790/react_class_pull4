import axios from "axios";
import { useEffect, useState } from "react";

function Localjson1() {
    const [data, setdata] = useState("")

    async function getStudentData() {
        axios.get('http://localhost:4000/student')
        .then((response) => console.log(response.data))
    }

    useEffect(() => {
      getStudentData()
    }, [])

  return (
    <div className="container d-flex">
        <div class="mb-3 align-self-end border border-danger">
            <label for="" class="form-label">City</label>
            <select class="form-select form-select-lg" name="" id="">
                <option selected>Select one</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
            </select>
        </div>
        
    </div>
  )
}

export default Localjson1
