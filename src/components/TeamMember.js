

import {React,Component} from 'react';
class TeamMember extends Component{
  render(){
    return(
      <div className="col-md-4 col-sm-6">
          <div className="card">
            <div className='card-header'>
               <img style={{maxWidth:'100%'}} src={this.props.img}/>
            </div>
            <div className='card-body' style={{backgroundColor:this.props.website  ? 'black':'white'}}>
              <h2>{this.props.name}</h2>
              <h5>{this.props.position}</h5>
              <div>{this.props.position}</div>
              <div>{this.props.email}</div>
              <div>{this.props.website}</div>
            </div>

          </div>
          </div>
    )
  }
  }


export default TeamMember