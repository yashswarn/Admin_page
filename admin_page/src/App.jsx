import './App.css'

function App() {
  return(
    <div>
      <div className="admin_header">
        <div className='main_heading'>
          <h1>EduAdmin Pro</h1>
          <p>Advanced Student Management Platform</p>
        </div>
        <div className='profile_name'>
          <h2>Alex Thompson</h2>
          <p>System Administrator</p>
        </div>
      </div>

      <div className="dashboard_overview">
        <h1>Dashboard Overview</h1>
        <p>Real-time insights into student performance, course progress, and institutional analytics</p>
      </div>

      <div className="cards_container">
        <div className='card'>
          <div className='left-content'>
            <p>Total Student</p>
            <div className='increase_percent'>
            <h1>248</h1>
            <p className='increase'>↑ +12%</p>
            </div>
            <br/>
            <progress max={100} value={85} className='student'></progress>

          </div>
          <div className='right-content'>

          </div>
        </div>

        <div className='card'>
          <div className='left-content'>
            <p>ACTIVE COURSES</p>
            <div className='increase_percent'>
            <h1>12</h1>
            <p className='increase'>↑ +8%</p>
            </div>
            <br/>

            <progress max={100} value={35} className='student'></progress>

          </div>
          <div className='right-content'>

          </div>
        </div>

        <div className='card'>
          <div className='left-content'>
            <p>AVG. COMPLETION</p>
            <div className='increase_percent'>
            <h1>73%</h1>
            <p className='increase'>↑ +15%</p>
            </div>
            <br/>

            <progress max={100} value={73} className='student'></progress>

          </div>
          <div className='right-content'>

          </div>
        </div>

        <div className='card'>
          <div className='left-content'>
            <p>CERTIFICATES</p>
            <div className='increase_percent'>
            <h1>50</h1>
            <p className='increase'>↑ +23%</p>
            </div>
            <br/>
            <progress max={100} value={50} className='student'></progress>
          </div>
          <div className='right-content'>

          </div>
        </div>
      </div>

      <div className='top_progress'>
      <div className='top_performer'>
        <div className='top_performer_heading'>
          <div className='performer_left_content'>
            <h2>Top Performer</h2>
            <p>Student Leaderboard</p>
          </div>
          <div className='performer_right_content'>
            <button className='view-btn'>View All</button>
          </div>
        </div>

        <div className='top_performer_subheading orange'>
          <div className='performer_left_subcontent'>
            <h2>Anuj</h2>
            <p>Backend Developement</p>
          </div>
          <div className='performer_right_content'>
            <h1>95</h1>
            <p>SCORE</p>
          </div>
        </div>

        <div className='top_performer_subheading black'>
          <div className='performer_left_subcontent'>
            <h2>Manu Bharti</h2>
            <p>Frontend Developement</p>
          </div>
          <div className='performer_right_content'>
            <h1>90</h1>
            <p>SCORE</p>
          </div>
        </div>
        <div className='top_performer_subheading red'>
          <div className='performer_left_subcontent'>
            <h2>Ganesh</h2>
            <p>Data Science</p>
          </div>
          <div className='performer_right_content'>
            <h1>87</h1>
            <p>SCORE</p>
          </div>
        </div>

        <div className='top_performer_subheading blue'>
          <div className='performer_left_subcontent'>
            <h2>Hemlata</h2>
            <p>Data Analytics</p>
          </div>
          <div className='performer_right_content'>
            <h1>85</h1>
            <p>SCORE</p>
          </div>
        </div>
        <div className='top_performer_subheading blue'>
          <div className='performer_left_subcontent'>
            <h2>Neelam</h2>
            <p>Cloud Computing</p>
          </div>
          <div className='performer_right_content'>
            <h1>80</h1>
            <p>SCORE</p>
          </div>
        </div>

        <div className='top_performer_subheading blue'>
          <div className='performer_left_subcontent'>
            <h2>Aman</h2>
            <p>AI/ML</p>
          </div>
          <div className='performer_right_content'>
            <h1>77</h1>
            <p>SCORE</p>
          </div>
        </div>

        <div className='top_performer_subheading blue'>
          <div className='performer_left_subcontent'>
            <h2>Charlie Devis</h2>
            <p>Cyber Security</p>
          </div>
          <div className='performer_right_content'>
            <h1>73</h1>
            <p>SCORE</p>
          </div>
        </div>

        <div className='top_performer_subheading blue'>
          <div className='performer_left_subcontent'>
            <h2>Anupam</h2>
            <p>Linux</p>
          </div>
          <div className='performer_right_content'>
            <h1>70</h1>
            <p>SCORE</p>
          </div>
        </div>
      </div>

      <div className='progress_tracker'>
        <div className='progress_tracker_heading'>
          <div className='performer_left_content'>
            <h2>Progress Tracker</h2>
            <p>Student Learning Journey</p>
          </div>
          <div className='performer_right_content'>
            <button className='view-btn'>View All</button>
          </div>
        </div>

        <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Anuj</h2>
            <p>Backend Developement</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Excellent</p>
            <h1>90%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>18/20 modules</span>
              <span>9 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>ALMOST DONE!</p>
            </div>

          </div>
        </div>

        <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Manu Bharti</h2>
            <p>Frontend Developement</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Excellent</p>
            <h1>89%</h1>
          </div>
          </div>

          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>17/20 modules</span>
              <span>8 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>ALMOST DONE!</p>
            </div>

          </div>
        </div>

        <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Ganesh</h2>
            <p>Data Science</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Very Good</p>
            <h1>85%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>16/20 modules</span>
              <span>6 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>ALMOST DONE!</p>
            </div>

          </div>
        </div>

        <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Hemlata</h2>
            <p>Data Analytics</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Very Good</p>
            <h1>84%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>15/20 modules</span>
              <span>5 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>ALMOST DONE!</p>
            </div>

          </div>
        </div>

        <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Neelam</h2>
            <p>Cloud Computing</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Good</p>
            <h1>80%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>12/20 modules</span>
              <span>4 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>DONE!</p>
            </div>

          </div>
        </div>
         <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Aman</h2>
            <p>AI/ML</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Good</p>
            <h1>78%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>11/20 modules</span>
              <span>4 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>DONE!</p>
            </div>

          </div>
        </div>
         <div className='progress_tracker_subheading'>
          <div className='progress_tracker_content'>
            <div className='performer_left_subcontent'>
            <h2>Charlie Devis</h2>
            <p>Cyber Security</p>
          </div>
          <div className='performer_right_subcontent'>
            <p>Good</p>
            <h1>75%</h1>
          </div>
          </div>
          <div className='progress_update'>
            <div className='progress_left_update'>
              <span>10/20 modules</span>
              <span>3 weeks active</span>
            </div>
            <div className='progress_right_update'>
              <p>DONE!</p>
            </div>
          </div>
        </div>
      </div>

      </div>

      <div className="container">
    {/* <!-- Recent Activity --> */}
    <div className="recent-activity">
      <div className="header">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest Student Actions</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="activity-card green">
        <div className="icon">&#x2705;</div>
        <div>
          <h3>Anuj</h3>
          <p>Backend Developement Module</p>
          <span className="time">About 3 hours ago</span>
        </div>
      </div>

      <div className="activity-card blue">
        <div className="icon">&#x1F465;</div>
        <div>
          <h3>Manu Bharti</h3>
          <p>Frontend Developement Module</p>
          <span className="time">About 3 hours ago</span>
        </div>
      </div>

      <div className="activity-card red">
        <div className="icon">&#x1F465;</div>
        <div>
          <h3>Ganesh</h3>
          <p>Data Science</p>
          <span className="time">About 2 hours ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Hemlata</h3>
          <p>Data Analytics Certificate</p>
          <span className="time">About 1 hours ago</span>
        </div>
      </div>

       <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Neelam</h3>
          <p>Cloud Computing</p>
          <span className="time">About 50 minutes ago</span>
        </div>
      </div>

       <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Aman</h3>
          <p>AI/ML Certificate</p>
          <span className="time">About 45 minutes ago</span>
        </div>
      </div>

       <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Charlie Devis</h3>
          <p>Cyber Security Certificate</p>
          <span className="time">About 44 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Anupam</h3>
          <p>Linux Certificate</p>
          <span className="time">About 41 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Smith</h3>
          <p>Data Analytics Certificate</p>
          <span className="time">About 40 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Bob</h3>
          <p>Fullstack Webdevlopment Certificate</p>
          <span className="time">About 35 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Bobith</h3>
          <p>SaaS Certificate</p>
          <span className="time">About 30 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>ObSmith</h3>
          <p>Cloud Computing Certificate</p>
          <span className="time">About 10 minutes ago</span>
        </div>
      </div>

      <div className="activity-card yellow">
        <div className="icon">&#x1F3C6;</div>
        <div>
          <h3>Boby</h3>
          <p>Complete Data Analysis Module</p>
          <span className="time">About 2 minutes ago</span>
        </div>
      </div>
    </div>

    {/* <!-- Quick Actions --> */}
    <div className="quick-actions">
      <div className="header orange">
        <h2>Quick Actions</h2>
        <p>Instant Admin Tools</p>
      </div>

      <div className="quick-card blue">
        <div className="quick-icon blue">&#x1F465;</div>
        <div>
          <h3>Add New Student</h3>
          <p>Register & Enroll Students</p>
        </div>
      </div>

      <div className="quick-card green">
        <div className="quick-icon green">➕</div>
        <div>
          <h3>Create Course</h3>
          <p>Design New Curriculum</p>
        </div>
      </div>

      <div className="quick-card orange">
        <div className="quick-icon orange">&#x1F4CA;</div>
        <div>
          <h3>Generate Report</h3>
          <p>Analytics & Insights</p>
        </div>
      </div>

      <div className="quick-card blue">
        <div className="quick-icon blue">&#x1F465;</div>
        <div>
          <h3>Remove a Student</h3>
          <p>Remove or Delete students</p>
        </div>
      </div>

      <div className="quick-card blue">
        <div className="quick-icon blue">&#x1F465;</div>
        <div>
          <h3>Black List a Student</h3>
          <p>Restrict students</p>
        </div>
      </div>

      <div className="quick-card blue">
        <div className="quick-icon blue">&#x1F465;</div>
        <div>
          <h3>Categorise Students</h3>
          <p>Add Students</p>
        </div>
      </div>
    </div>
      </div>

    </div>
  )
}

export default App


