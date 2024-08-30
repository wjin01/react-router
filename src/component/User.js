import { useLocation, useParams, useSearchParams } from "react-router-dom";


function User() {

  //1. useLocation()훅을 사용
  // const location = useLocation();
  // const {search, pathname} = location;
  // console.log(search);
  // console.log(pathname);

  //2. useSearchParams()훅을 사용
  const [obj, setObj] = useSearchParams();
  // console.log(obj); //값을 얻을 수 있음
  // console.log(setObj); //URI값을 강제로 변경 가능
  let name = obj.get("name"); //name키를 얻음
  let age = obj.get("age"); //age키를 얻음
  console.log("전달된 파라미터:", name, age);
  
  const handleClick = () => {
    setObj({name: '훈이', age : 5});
  }

  return(
    <div>
      <h3>User 페이지</h3>
      <button type="button" onClick={handleClick}>URI값 변경</button>
    </div>
  )
}

export default User;