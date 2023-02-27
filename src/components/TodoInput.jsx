const GlobalInputStyled = {
    color : 'white',
    margin : '20px auto 0 20px',
    display : 'flex',
    gap : '20px',
    fontWeight : 'bold'
}

const buttonStyled = {
    margin : '0 auto 0 auto',
    fontWeight : 'bold',
    borderRadius : '10px',
    backgroundColor : 'white',
}

const inputStyled = {
    maxWidth : '250px',
    width : '200px',
    height : '25px',
    borderRadius : '10px'

}

const TodoInput = ({title, content, titleChangeHandler, contentChangeHandler, clickAddButtonHandler}) => {
    return (
        <div style={GlobalInputStyled}>
            Title <input type = 'text'
            style={inputStyled}
            value = {title}
            onChange = {titleChangeHandler}
            />
            
            Contents <input type = 'text' 
            style={inputStyled}
            value = {content}
            onChange = {contentChangeHandler}
            />
            <button style={buttonStyled} onClick = {clickAddButtonHandler}>submit</button>
        </div>
    )
}

export default TodoInput;