import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextApi";


function App() {

  //contextAPI의 변화를 알릴때는 Context의 Provider를 사용합니다
  //Provider는 value props를 필수로 전달해야함

  //ex
  //select 값이 변경되면 state를 변경해서 Provider로 전달되는 색상을 바꾸기
  const[color, setColor] = useState('red');


  return(
    <>
      <h3>컨텍스트 API</h3>

      <select onChange={e => setColor(e.target.value)}>
        <option>red</option>
        <option>blue</option>
        <option>green</option>
      </select>

      <ColorContext.Provider value={{color: color}}>
        <ColorComponent/>
      </ColorContext.Provider>
    </>
  )
}
export default App;