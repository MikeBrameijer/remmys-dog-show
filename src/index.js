import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function NextDog(prop){
//     return(
//         <button className = "nextDog" onClick ={props.onClick}>
//             testing
//         </button> 

//     );
// }

class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImg: String,
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
        let mainImg;
        let introRemmy = "./remmy-relax.jpg";
        // let randomDogImg;
        // let randomDogImg = this.state.dogImg;

        //logic for setting the intro img of remmy
        // if(!randomDogImg){
        //     mainImg = introRemmy;
        // }
        if(!this.state.dogImg){
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
                    <p>{this.state.dogImg ? `Hi my name is Remmy! I love other dogs, if you click the button below I'll take you on a tour of some of my favorite Pals!` : 'Look at this Pup!'}</p>
                    {/* the buttons text will change after the user gets started */}
                    <button class="next-dog-btn" onClick={() => this.nextDog()}>
                        {this.state.dogImg ? `Click to get started!` : `Click to see the next pup`}
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


