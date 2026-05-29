/*import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

let Home =()=>{
    return <div>
        <h3>Home</h3>
        <div className='card' >
            <h3>Total courses</h3>
            <p>22</p>
        </div>
        <div className='card'>
            <h3>Completed Courses</h3>
            <p>2</p>
        </div>
        <div className='card'>
            <h3>Pending Courses</h3>
            <p>20</p>
        </div>
        <div className='card'>
            <h3>Total Students</h3>
            <p>15</p>
        </div>
    </div>
}
export default Home*/

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

let Home = () => {
  return (
    <div className='container mt-4'>

      {/* Heading */}
      <h2 className='text-center mb-4 text-primary'>
        Home Dashboard
      </h2>

      {/* Cards Row */}
      <div className='row g-4'>

        {/* Card 1 */}
        <div className='col-md-3'>
          <div className='card shadow border-0 rounded-4 text-center p-3'>
            <div className='card-body'>
              <h4 className='card-title text-dark'>
                Total Courses
              </h4>
              <p className='display-6 fw-bold text-primary'>
                22
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='col-md-3'>
          <div className='card shadow border-0 rounded-4 text-center p-3'>
            <div className='card-body'>
              <h4 className='card-title text-dark'>
                Completed Courses
              </h4>
              <p className='display-6 fw-bold text-success'>
                2
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='col-md-3'>
          <div className='card shadow border-0 rounded-4 text-center p-3'>
            <div className='card-body'>
              <h4 className='card-title text-dark'>
                Pending Courses
              </h4>
              <p className='display-6 fw-bold text-warning'>
                20
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className='col-md-3'>
          <div className='card shadow border-0 rounded-4 text-center p-3'>
            <div className='card-body'>
              <h4 className='card-title text-dark'>
                Total Students
              </h4>
              <p className='display-6 fw-bold text-danger'>
                15
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home