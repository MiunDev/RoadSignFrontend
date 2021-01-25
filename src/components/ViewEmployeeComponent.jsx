import React, { Component } from 'react';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
        }
    }

    componentDidMount() {

    }

  render() {
    return (
      <div>
          <h2>View Employee page</h2>
      </div>
    );
  }
}

export default ViewEmployeeComponent