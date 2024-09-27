import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
// import Footer from "../../components/Footer";
import UserStats from "../../components/UserStats";
import "./Home.css";

const jobFeaturesList = [
    { userStatNumber: "1,75,324", userStatLabel: "Live Job" },
    { userStatNumber: "97,354", userStatLabel: "Companies" },
    { userStatNumber: "38,47,154", userStatLabel: "Candidates" },
    { userStatNumber: "7,532", userStatLabel: "New Jobs" },
];

export default function HomepagePage() {
    return (
        <>
            <Helmet>
                <title>Job Portal - Find Your Dream Job Today</title>
                <meta name="description" content="Explore over 1.75 million live job listings and find a position that matches your skills." />
            </Helmet>

            <div className="homepage-container">
           

                <div className="content-container">
                    {/* Job Search Section */}
                    

                    <div className="user-stats-container">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {jobFeaturesList.map((d, index) => (
                                <UserStats {...d} key={"homepageFeatures" + index} />
                            ))}
                        </Suspense>
                    </div>

            
                </div>
            </div>
        </>
    );
}
