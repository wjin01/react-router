import { useParams } from "react-router-dom";


function Info() {

  //예시데이터
  const data = {
    "1" : {id: 1, name: "짱구"},
    "2" : {id: 2, name: "훈이"},
    "3" : {id: 3, name: "맹구"}
  }

  //useParams훅 - URL파라미터
  let param = useParams();
  console.log(param);
  console.log(param.num); //찾아서 사용

  const {id, name} = data[param.num];
  

  return(
    <div>
      <h3>Info 페이지</h3>
      <div>
        선택된 데이터는 {id}이고 {name}입니다
      </div>
    </div>
  )
}

export default Info;