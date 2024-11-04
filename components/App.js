import React ,{Component} from 'react'
class App extends Component{
    constructor(){
        super();
        this.state= {
            number:0
        }
       this.clickHandler = this.clickHandler.bind(this);

    }
     clickHandler(){
            this.setState (prevState =>{
                return {
                    number:prevState.number +1
                }
                
            })
        }
    render(){
        return(
            <div className="container">
               <h1>{this.state.number}</h1> 
               <boutton className="btn btn-primary" onClick={this.clickHandler}>Click Me</boutton>
            </div>
         

        )

    }
}
export default App