import Model from './Model';
function TodoItems(props){
    return(
        <>
        
        <div id={props.id} className={ props.read===true ? 'p-2 ':' p-2 shadow bg-light text-dark'} data-bs-toggle="tooltip" data-bs-placement="top" title={props.read===true? 'Completed Todo':'Incomplete Todo'}>
        
            <input type="checkbox" checked={props.read===true? 'true':''} value={props.read} id={props.id} onChange={props.checkRead}/>
            
        <div className ='row'>
            <div className='col-10'>
            <h4>{props.title}</h4>
            </div>
            <div className='col-2'>
                </div>
        </div>

       <div>
            <p>{props.content.substr(0,60)}</p>
            
            <span className='bg-primary'onClick={props.checkShow} id={props.id}>Read More.......................</span>
            <div className ='row'>
                <div className='col-8'>
                    <span className="text-right" style={{fontSize:'10px'}}>Created on {props.date} {props.time}</span>
                </div>
                
                <div className='col-2'>
                <button  onClick={props.checkShow} id={props.id}> Edit </button>
                </div>
                <div  className='col-2'>
                    <button onClick={props.checkDelete} id={props.id} >Delete</button> 
                </div>    

            </div>
        </div>
        </div>
        </>
    )
}
export default TodoItems;