import React from "react";

class Model extends React.Component{
  
  render(){
  return(
      <>
      
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"  data-bs-placement="top" title="Create New Todos">
      <i className={this.props.icon}></i>
      </button>


    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content text-dark">
          <div className="modal-header">
            <h5 className="modal-title " id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Enter Todo</label>
              <input type="text" name='todo' className="form-control" value={this.props.todo} onChange={this.props.handleChangeValue} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">content</label>
              <textarea name='content' className="form-control" id="exampleFormControlTextarea1" rows="3"  value={this.props.content} onChange={this.props.handleChangeValue}></textarea>
          </div>        
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id={this.props.id} onClick={this.props.sendHandler}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
      
      </>
    )
  }
}
export default Model;