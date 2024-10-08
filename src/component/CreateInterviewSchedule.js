import React, { useState } from 'react';
import './CreateInterviewSchedule.css';


const CreateInterviewSchedule = () => {
  const hours = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  return (
    <div className="schedule-container">
      <div className="content">
        <h1>Create Interview Schedule:</h1>
        <div className="dropdowns">
          <label>
            Date:
            <select>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </label>
          <label>
            Month:
            <select>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                <option key={i} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>
          <label>
            Year:
            <select>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={2024 + i}>
                  {2024 + i}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="time-slots">
          <h3>Select Time Slots:</h3>
          {hours.map((hour, index) => (
            <div key={index} className="time-slot">
              <label>
                <input type="checkbox" />
                {hour}
              </label>
            </div>
          ))}
        </div>
        <div className="interview-types">
          <h3>Interview Type:</h3>
          <label>
            <input type="checkbox" />
            Technical Interview
          </label>
          <label>
            <input type="checkbox" />
            Behavioral Interview
          </label>
          <label>
            <input type="checkbox" />
            Design Interview
          </label>
        </div>
        <div className="actions">
          <button className="upload-button">Upload Candidate Details</button>
          <a href="#" className="download-template">&#x2193; Download Template</a>
          <button className="upload-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateInterviewSchedule;
