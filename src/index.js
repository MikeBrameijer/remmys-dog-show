import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainApp extends React.Component {
    constructor() {
        super();
        this.state = {
            dogImg: []
        };
    }

    // the following is a API call for fetching the dog img
    nextDog() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({dogImg: data.message});
            console.log(this.state.dogImg);
        });
        
    }
    

    render() {
        console.log(this.state.dogImg );
        let mainImg;
        let introRemmy = "./remmy-relax.jpg";

        if(this.state.dogImg.length === 0){
            mainImg = introRemmy;
        }else{
            mainImg = this.state.dogImg;
        }

        return (
            <div className="mainApp">
                <div class="main-header">
                    <img class="logo" src="./remmyHeadshot.jpg"></img>
                    <h1>Remmy's Dog Show</h1>
                </div>
                
                <div class="main">
                
                    <img class="dog-display" src={mainImg}></img>
                    {/* when the pages first loads a picture of Remmy with introduce the users to the dog tour */}
                    <p>{this.state.dogImg.length === 0 ? `Hi my name is Remmy! I love other dogs, if you click the button below I'll take you on a tour of some of my favorite Pals!` : 'Look at this Pup!'}</p>
                    {/* the buttons text will change after the user gets started */}
                    <button class="next-dog-btn" onClick={() => this.nextDog()}>
                        {this.state.dogImg.length === 0 ? `Click to get started!` : `Click to see the next pup`}
                    </button>
                </div>
            </div>
           
        );
    }
}


ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);


