import ColorContext from "../context/ContextApi";


function ColorComponent() {

  //컨텍스트 API를 전달 받은 하위 컴포넌트에서는 Consumer를 사용해서 값을 받을 수 있음
  //Consumer는 return으로  하면에 보여질 JSX 문법을 작성할 수 있음

  return(
    <ColorContext.Consumer>
    {
      (value) => {
        return <>
          <h3>하위 컴포넌트</h3>
          <div>
            값:{value.color}
          </div>
        </>
      }
    }
    </ColorContext.Consumer>
  )
}
export default ColorComponent;