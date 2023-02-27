const List = ({item, clickRemoveButtonHandler, clickWorkingfalseChanger}) => {
    return (<div key={item.id} className='component-style'> 
    <div style={{fontWeight : 'bold'}}>{item.title}</div>
    <br/>
    {item.content}
    <br/>
    <div className="button-style">
        <button  onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
        <button  onClick={()=>{clickWorkingfalseChanger(item.id)}}>완료</button>  
    </div>
    </div>);
  };
  
export default List;