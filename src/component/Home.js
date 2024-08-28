import { Link } from "react-router-dom";

function Home() {

  return(
    <div>
      <h3>Home 페이지</h3>
      <Link to='/user'>User 페이지</Link>
      <br/>
      <Link to='/info'>Info 페이지</Link>

    </div>
  )
}

export default Home;