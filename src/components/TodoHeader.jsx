const headerStyled = {
    padding: '48px 32px 24px 32px',
    borderBottom: '1px solid #e9ecef'
}

const headerDateStyled = {
    margin: '0px',
    fontSize: '36px',
    color: '343a40'
}

const headerDayStyled = {
    marginTop: '4px',
    color : '#868e96',
    fontSize: '21px'
}

const headerTaskLeft = {
    color: '#20c997',
    fontSize: '18px',
    marginTop: '40px',
    fontWeight: 'bold'
}
const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
const getMonth = () => {
    let month = new Date()
    return month.getMonth()+1
}
const getDate = () => {
    let month = new Date()
    return month.getDate()
}

const getYear = () => {
    let month = new Date()
    return month.getFullYear()
}

const getDay = () => {
    let month = new Date()
    return day[month.getDay()]
}


const TodoHeader = ({todo}) => {
    return (
        <div style = {headerStyled}>
            <h1 style={headerDateStyled}>{getYear()}년 {getMonth()}월 {getDate()}일 </h1>
            <div style={headerDayStyled}> {getDay()} </div>
            <div style={headerTaskLeft}>할 일 {todo}개 남음</div>
        </div>
    )
}

export default TodoHeader;