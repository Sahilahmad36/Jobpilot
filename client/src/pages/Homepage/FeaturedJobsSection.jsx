

import React, { Suspense } from "react";
import './FeaturedJobsSection.css'; 




const jobOpeningsGrid = [
    {
        jobTitle: "Technical Support Specialist",
        employmentType: "Part-time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Senior UX Designer",
        employmentType: "Full-Time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Marketing Officer",
        employmentType: "Internship",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Junior Graphic Designer",
        employmentType: "Internship",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Interaction Designer",
        employmentType: "Part-time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Project Manager",
        employmentType: "Full-Time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Software Engineer",
        employmentType: "Full-Time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Visual Designer",
        employmentType: "Full-Time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Front End Developer",
        employmentType: "Part-time",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
    {
        jobTitle: "Marketing Manager",
        employmentType: "Internship",
        salaryRange: "Salary: $20,000 - $25,000",
        employerName: "Google Inc.",
        locationAddress: "501 S Russell St, Missoula",
    },
];

const JobListing = ({ jobTitle, employmentType, salaryRange, employerName, locationAddress }) => {
    return (
        <div className="job-listing">
            <h3>{jobTitle}</h3>
            <p>{employmentType}</p>
            <p>{salaryRange}</p>
            <p>{employerName}</p>
            <p>{locationAddress}</p>
        </div>
    );
};

export default function FeaturedJobsSection() {
    return (
        <div className="featured-jobs-section">
            <div className="container">
                <div className="header">
                    <h2 className="title">Featured Jobs</h2>
                    <button className="view-all-button">
                        View All
                    </button>
                </div>
                <div className="job-listings">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {jobOpeningsGrid.map((job, index) => (
                            <JobListing {...job} key={"jobsGrid" + index} />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
