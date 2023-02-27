const DoneList = ({item, clickRemoveButtonHandler, clickWorkingtrueChanger}) => {
    return (<div key={item.id} className='done-style'> 
    <div style={{fontWeight : 'bold'}}>{item.title}</div>
    <br/>
    {item.content}
    <br/>
    <button className='button-style' onClick={()=>{clickRemoveButtonHandler(item.id)}}>삭제하기</button>
    <button onClick={()=>{clickWorkingtrueChanger(item.id)}}>취소</button>
    </div>)
  };

export default DoneList;