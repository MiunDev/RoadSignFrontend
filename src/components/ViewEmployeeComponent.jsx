import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      employee: {}
    }
    this.editEmployee = this.editEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then(res => {
      this.setState({ employee: res.data });
    });
  }
  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }
  cancel() {
    this.props.history.push('/employees');
  }

  render() {
    return (
      <div>
        <br /><br />
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee details</h3>
          <div className="card-body">
            <div className="row">
              <label>Employee first name: </label>
              <div>{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label>Employee last name: </label>
              <div>{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label>Employee email: </label>
              <div>{this.state.employee.emailId}</div>
            </div>
            <button onClick={() => this.editEmployee(this.state.employee.id)} className="btn btn-info" style={{marginRight: "10px"}}>Update</button>
            <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent