import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//     return (
//         <button
//             className="square"
//             onClick={props.onClick}
//         >
//             {props.value}
//         </button>
//     );
// }

// class Board extends React.Component {




//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.props.squares[i]}
//                 onClick={() => this.props.onClick(i)}
//             />
//         );
//     }


//     render() {
//         return (
//             <div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }



class MainApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImg: String,
        };
    }

    // the following is a API call for fetching the dog img
    componentDidMount() {
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
        let randomDogImg;
        // let randomDogImg = this.state.dogImg;

        //logic for setting the intro img of remmy
        if(!randomDogImg){
            mainImg = introRemmy;
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
                    <p>{!this.randomDogImg ? `Hi my name is Remmy! I love other dogs, if you click the button below I'll take you on a tour of some of my favorite Pals!` : 'Look at this Pup!'}</p>
                    {/* the buttons text will change after the user gets started */}
                    <button class="next-dog-btn">{!this.randomDogImg ? `Click to get started!` : `Click to see the next pup`}</button>
                </div>
            </div>
           
        );
    }
}


ReactDOM.render(
    <MainApp />,
    document.getElementById('root')
);


// {this.randomDogImg ? <p>Look at this cute pup!</p> : <p> Hi my name is Remmy! I love other dogs, if you click the button below I'll take you on a tour of some of my favorite Pals!</p>}
