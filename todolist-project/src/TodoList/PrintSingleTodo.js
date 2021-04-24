import Model from './Model';
function PrintSingleTodo(props){
    
    return(
        <div className="container" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href="#" className="card-link"><Model icon='fas fa-edit' id={props.id} sendHandler={props.checkUpdate} handleChangeValue={props.handleChangeValue} todo={props.todo} content={props.description}/></a>
                <button onClick={props.checkDelete} id={props.id} >Delete</button>
            </div>
        </div>
    )
}
export default PrintSingleTodo;