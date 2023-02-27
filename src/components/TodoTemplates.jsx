import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import List from "./List";
import DoneList from "./DoneList";
import "./component.css";

const TodoTemplate = () => {
    const [todo, setTodo] = useState([
        { id: 1, title: 'react 마스터!', content: '리팩토링 많이 해보기', isDone: 'false' },
        { id: 2, title: 'next.js 마스터!', content: '리액트 빨리 끝내기', isDone: 'false' },
        { id: 3, title: 'flutter 마스터!', content: '웹 개발 완벽하게 마무리하고 시작!', isDone: 'false' }
    ])

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const contentChangeHandler = (event) => {
        setContent(event.target.value)
    }

    const clickAddButtonHandler = () => {
        const newTodo = {
            id: Math.random(),
            title,
            content,
            isDone: 'false'
        };
        setTodo([...todo, newTodo])
    }

    const clickRemoveButtonHandler = (id) => {
        const newTodo = todo.filter((item) => item.id !== id)
        setTodo(newTodo)
    }

    const clickWorkingfalseChanger = (id) => {
        let newTodo = todo.map((item) => {
            if (item.id === id) {
                item.isDone = 'true'
                return item
            } else {
                return item
            }
        });
        setTodo(newTodo)
    }

    const clickWorkingtrueChanger = (id) => {
        let newTodo = todo.map((item) => {
            if (item.id === id) {
                item.isDone = 'false'
                return item
            } else {
                return item
            }
        });
        setTodo(newTodo)
    }

console.log(todo)

return (
    <div style={{
        maxWidth: '1200px',
        width: '800px',
        height: '100%',


        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.4)',

        margin: 'auto',
        marginTop: '80px',
        marginBottom: '80px',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <TodoHeader todo={todo.filter((item) => item.isDone == 'false').length} />
        <div style={{
            backgroundColor: '#20c997',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
        }}>

            <TodoInput title={title}
                content={content}
                titleChangeHandler={titleChangeHandler}
                contentChangeHandler={contentChangeHandler}
                clickAddButtonHandler={clickAddButtonHandler}

            />
            <div>Working</div>
            <div className="app-style">
                {
                    todo.filter(item => item.isDone == 'false').map(item => {
                        return <List key={item.id}
                            item={item}
                            clickRemoveButtonHandler={clickRemoveButtonHandler}
                            clickWorkingfalseChanger={clickWorkingfalseChanger} />
                    })
                }
            </div>
        </div>
        <div>Done</div>
        <div className="app-style">
            {
                todo.filter(item => item.isDone == 'true').map(item => {
                    return <DoneList key={item.id}
                        item={item}
                        clickRemoveButtonHandler={clickRemoveButtonHandler}
                        clickWorkingtrueChanger={clickWorkingtrueChanger}/>
                })
            }
        </div>
    </div>);
};

export default TodoTemplate;