import React from 'react';
import { Job } from '@interfaces/common';

type Job2Props = {
    job: Job;
}
const Job2: React.FC<Job2Props> = ({job}) => {
    
    return (
        <>
            <img src={job.img} alt={job.alt} />
            <div>
                <p className="job__name">{job.name}</p>
                <p className="job__period">{job.period}</p>
            </div>
        </>
    );
}

export default Job2;