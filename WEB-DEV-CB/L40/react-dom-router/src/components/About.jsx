import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>About Us</h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis quod,
        at voluptates necessitatibus aperiam corporis excepturi quo vel non
        laboriosam voluptatibus, illo eveniet impedit accusamus, iusto nostrum
        sed alias eaque quam nulla voluptas? Aliquid optio ducimus
        necessitatibus veniam iure?
      </p>

          <Outlet />
      <Link to="team">Team</Link>
       <Link to="centers">Centers</Link>
       <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default About