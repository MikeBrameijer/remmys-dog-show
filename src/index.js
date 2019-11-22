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

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogImg: String,
        };
    }

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
        let randomDogImg = this.state.dogImg;

        return (
            <div className="main">
                <h1>Remmy's Dog Show</h1>
                <img src={randomDogImg}></img>
            </div>
        );
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

