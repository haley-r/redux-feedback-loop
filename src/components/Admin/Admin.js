import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


class Admin extends Component {
    state = {
        submittedFeedback: []
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback=()=>{
      console.log('trying axios in app.js');
      axios({
        method: 'GET',
        url: '/feedback'
      }).then((response) => {
          this.setState({
              submittedFeedback: response.data
          })
      }).catch((error)=>{
        console.log(error);
        alert('problem getting feedback');
      })
    }

    render() {
        return (
            <Card className="Admin">
                <h2>Submitted Feedback</h2>
                <div className="reviewStuff">
                   <table>
                       <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Understanding</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete </th>
                                <th>Flag</th>
                            </tr>
                       </thead>
                       <tbody>
                            {this.state.submittedFeedback.map(feedbackObject=>
                                <tr key={feedbackObject.id}>
                                    <td>{feedbackObject.feeling}</td>
                                    <td>{feedbackObject.understanding}</td>
                                    <td>{feedbackObject.support}</td>
                                    <td>{feedbackObject.comments}</td>
                                    <td><Button>Delete</Button></td>
                                    <td><Button>Flag</Button></td>
                                </tr>)}
                       </tbody>
                   </table>
                </div>
            </Card>
        )
    }
}

export default Admin;


