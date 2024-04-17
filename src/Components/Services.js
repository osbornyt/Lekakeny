import React, { useState } from 'react';
import '../main.css';

function Services() {
    const [dropdownStates, setDropdownStates] = useState([false, false, false, false]);
  
    const toggleDropdown = (index) => {
      const updatedDropdownStates = [...dropdownStates];
      updatedDropdownStates[index] = !updatedDropdownStates[index];
      setDropdownStates(updatedDropdownStates);
      console.log("toogling");

    };
    
    const data = {0: "Digital Marketing",
                  1: "Data and Analytics",
                  2: "Search Engine Optimization",
                  3: "Customer Research and User Experience",
                  4: "Customer Service Training",
                  5: "Soft Skills Training",
                  6: "Career Coaching and Mentorship",
                  7: "Content Marketing"  
                }
    const dataFields = {
                      0: ["Social Media Advertising", "Search Engine Marketing", "Mixed Traditional and Digital", "Programmatic & Location"],
                      1: ["Audits", "Analytics Setup & Optimisation", "Measurement Framework", "Modelling"],
                      2: ["Competitor Analysis", "Keyword Research", "Performance Tracking", "Technical Audits"],
                      3: ["UI & UX Design", "Qualitative Research", "Quantitative Research", "CX and Service Design"],
                      4: ["Product Familiarization","Skill Enhancement","Certification Programs","Feedback and Evaluation"],
                      5: ["Personalized Development Plans","Interactive Workshops and Role-Playing Exercises","Communication and Conflict Resolution Training","Leadership and Emotional Intelligence Development"],
                      6: ["Career Planning and Goal Setting","Networking Strategies and Relationship Building","Career Transition Support and Guidance","Interview Preparation and Skills Development"],
                      7: ["Design & Production", "Digital Ad Production", "Long Form Conten", "Strategic Planning & Insight"]

                }
    // // Close dropdown when clicking outside the rectangle
    // const handleOutsideClick = (event) => {
    //   const rectangles = document.querySelectorAll(".rectangle");
    //   rectangles.forEach((rectangle) => {
    //     if (!rectangle.contains(event.target)) {
    //       setDropdownStates([false, false, false, false]);
    //     }
    //   });
    // };
  
    // // Attach the outside click listener when the component mounts
    // React.useEffect(() => {
    //   document.addEventListener("click", handleOutsideClick);
    //   return () => {
    //     document.removeEventListener("click", handleOutsideClick);
    //   };
    // }, []);
  
    return (
      <div className="services-offer">
        <div className="services-title">
        <h2>SERVICES OFFERED</h2>
        </div>
        
             <div className='services'>
        
        <div className='services-content'>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
          <div key={index} className="rectangle" onClick={() => toggleDropdown(index)}>
            <div className="rectangle-header">
              <div className="rectangle-header-section">
                <div className=""><i className="fas fa-solid fa-dollar-sign"></i></div>
                <div className="text">{data[index]}</div>
              </div>
              <div className=""><i className="fas fa-solid fa-caret-down"></i></div>
            </div>
            {dropdownStates[index] && (
              <ul>
              {dataFields[index].map((item) => (
                <li key={item}>{item}</li>
              ))}
              </ul>
            )}
          </div>
        ))}
        </div>
      </div>
      </div>
 
    );
  }
  
export default Services;