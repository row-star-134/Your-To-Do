// import { ReactComponent } from '*.svg';
import React from 'react';
import TodoItems from './TodoItems';
import Header from './Header';
import Model from './Model';
import PrintSingleTodo from './PrintSingleTodo';
class TodoStore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todoList : [],
            model : false,  
            todo : '',
            content : '',
            showFull : true,
            singleTodo : [],
            search : '',
            temp : [],
            status : ''

        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleCheckRead = this.handleCheckRead.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        }

       
        handleSubmit(){
            const length = this.state.todoList.length;
            const id = length=== 0 ? 0  :  this.state.todoList[length-1].id
            const TodoList  = this.state.todoList;
           
            const name = {
                id: id+1,
                name : this.state.todo,
                content : this.state.content,
                date : new Date().toLocaleDateString(),
                time : new Date().toLocaleTimeString(),
                read : false
            }
            TodoList.push(name);
            console.log(TodoList);
            this.setState({
                 todoList : TodoList,
                 todo : '',
                 content : ''
                });
            
           alert('Todo Created');
        }

        handleChangeValue(event){
            const name = event.target.name;  
            this.setState({
                  [name] : event.target.value
              }) 
        }

        handleCheckRead(event){
            const name =event.target.value;
            const id =event.target.id;
            const todo = this.state.todoList;
            name ==='true'?  todo[id-1].read = false :  todo[id-1].read = true
            this.setState({
                todoList : todo
            })
        }
        handleShow(event){
           const name = !this.state.showFull;
           const id = event.target.id;
           const value = this.state.singleTodo = this.state.todoList[id-1];
           this.setState({
               showFull : name ,
               todo : value.name,
               content : value.content
           });
         
        
            
        }
        handleBack(){
            const name = !this.state.showFull;
            this.setState({
                showFull : name ,
                todo : '',
                content : ''
                 
            });
        }
        handleUpdate(event)
        { const id = event.target.id
          const TodoList  =this.state.todoList;
          TodoList[id-1].name = this.state.todo ;
          TodoList[id-1].content = this.state.content;
          this.setState({
              todo :'',
              content :'',
              todoList : TodoList,
              temp : TodoList
          })     ;
          alert('Your Todo Updated')
        
        }
        handleDelete(event){
           console.log('Delete'); 
           const id = event.target.id
           const TodoList  =this.state.todoList;
           const index =TodoList.map((item , index)=>{
               return item.id.toString().indexOf(id) 
           })
           index.map((item , i)=>
             item === 0 ? TodoList.splice(i ,1) : ''
           )
           this.setState({
            todo :'',
            content :'',
            todoList : TodoList,
            temp : TodoList,
            search : '',
            showFull : true
            });
            alert('Your Todo Deleted');
            if(this.state.todoList.length === 0){
                this.setState({   
                    status : 0  
                });
            }
      
        }
        handleSearch(event){
                const presentState =event.target.value;
                
            
                    var matches = this.state.todoList.filter(function(windowValue){
                        if(windowValue) {
                            return windowValue.name.toLowerCase().indexOf(presentState.toLowerCase()) >= 0;
                        }
                    });
                  
                    this.setState({
                        search : presentState,
                        temp  : matches ,
                        status : presentState.length
                    }) 
            

        }
    render(){
        return(
        this.state.showFull === true ?        
        <div className='container p-4 shadow text-light' style={{border:'1px solid black',background: '#556270',background: '-webkit-linear-gradient(to right, #556270, #ff6b6b)', background: 'linear-gradient(to right, #556270, #ff6b6b)'}}>
           <>
           <div className='p-2 my-4'>
               <Header title='Your TodoList'/>
               <input type='search' value={this.state.search} style={{width:'88%', height:'40px'}} placeholder='Serch Your todos' onChange={this.handleSearch} />
               {/* <button onClick={this.handleClickForm}></button> */}
               <Model icon='fas fa-plus-circle' handleChangeValue= {this.handleChangeValue} todo={this.state.todo} content={this.state.content} sendHandler={this.handleSubmit}/>
            </div>
            <hr/>
            {this.state.status <= 0 ?
            this.state.todoList.map((items , index)=>
                <TodoItems title={items.name} content={items.content} id={items.id} date={items.date} time={items.time} read={items.read} checkShow={this.handleShow} checkRead={this.handleCheckRead} checkDelete={this.handleDelete}/>
            ) : 
            this.state.temp.map((items , index)=>
            <TodoItems title={items.name} content={items.content} id={items.id} date={items.date} time={items.time} read={items.read} checkShow={this.handleShow} checkRead={this.handleCheckRead} checkDelete={this.handleDelete}/>
        )
            }
           </>
        
        </div> : 
        <div  className='container p-4 shadow text-light' style={{border:'1px solid black',background: '#556270',background: '-webkit-linear-gradient(to right, #556270, #ff6b6b)', background: 'linear-gradient(to right, #556270, #ff6b6b)'}}>
            <button onClick={this.handleBack}>Back</button>
            <div className='p-2 my-4'>
                <Header title={this.state.singleTodo.name}/>
                <PrintSingleTodo title={this.state.singleTodo.name} content={this.state.singleTodo.content} id={this.state.singleTodo.id} checkUpdate={this.handleUpdate} checkDelete={this.handleDelete} handleChangeValue= {this.handleChangeValue} todo={this.state.todo} description={this.state.content}/>
                
            </div>
            </div>
        )
    }
}
export default TodoStore;