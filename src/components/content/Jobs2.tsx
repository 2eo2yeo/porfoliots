import React, { useEffect, useState } from 'react';
import Job2 from './Job2';
import axios from 'axios';

const Jobs2: React.FC = () => {

    
    const [jobList, setJobList] = useState([]);
    
    useEffect(()=>{
        axios("data/jobs.json")
        .then((res) => setJobList(res.data) )
        .catch((error) => console.log(error));        
    },[])

        return (
            <ul className="jobs">
                {jobList && jobList.map((job) =>
                    <li className="job">
                        <Job2 job={job}/>
                    </li>
                )}
            </ul>
        );
}

export default Jobs2;