import React, { Component } from 'react';
import TeamMember from './TeamMember';
import memberInfo from './memberInfo';

class Team extends Component {
    constructor() {
        super();
        this.state = { 
            memberInfo: memberInfo,
            members: [],
            counter: 0,
        };
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent() {
        if (this.state.counter < this.state.memberInfo.length) {
            const newMember = this.state.memberInfo[this.state.counter];
            
            // Mettre à jour les membres en ajoutant le nouveau membre
            this.setState((prevState) => ({
                members: [...prevState.members, newMember],
                counter: prevState.counter + 1,
            }));
        }
    }

    render() {
        return (
            <div className='row'>
                <button 
                    className='btn btn-primary btn-lg btn-block' 
                    onClick={this.clickEvent}
                >
                    click me!
                </button>
                
                {/* Affichage des membres mis à jour */}
                {this.state.members.map(member => (
                    <TeamMember 
                        key={member.id}
                        img={member.img}  
                        name={member.name}  
                        position={member.position}  
                        phone={member.phone}  
                        email={member.email}  
                        website={member.website}  
                    />
                ))}
            </div>
        );
    }
}

export default Team;

