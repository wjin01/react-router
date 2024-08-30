import { Link } from "react-router-dom";

function Home() {

  return(
    <div>
      <h3>Home 페이지</h3>
      <Link to='/user?name=짱구&age=5'>User 페이지</Link>
      <br/>
      <Link to='/info/1'>Info1 페이지</Link>
      <br/>
      <Link to='/info/2'>Info2 페이지</Link>
      <br/>
      <Link to='/info/3'>Info3 페이지</Link>

    </div>
  )
}

export default Home;