import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MainApp extends React.Component {
    constructor() {
        super();
        this.state = {
            dogImg: [],
            randomCaption: []
        };
    // this might be from working in TypeScript too long, but I would like to know why I cant just declare dogImg: String.
    // I had originally declared it as dogImg: String and work fine but it wouldn't let me do use my ternary operator for the intro picture and text
    // with this statement (!this.state.dogImg ? blah : blah). instead I have to set state.dogImg as an array and use this logic (this.state.dogImg.length === 0)
    // to get my desired results.
        
    }

    // the following is a API call for fetching the dog img
    nextDog() {
        let randomSayingArray = ["Look at this pup!", "Wow!", "This pup is awesome at fetch!", "Who's a good pup?!"]
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({dogImg: data.message,
                randomCaption: randomSayingArray[Math.floor(Math.random() *4)]
            });
        });
        
    }

    // ok sorry I was having to much fun with this and got carried away. I forgot one of the requirements is that a random dog image load
    // when the page loads. I'm guessing to highlight the understanding of componentWillMount lifeCycle method. which im assuming is like 
    // Angulars ngOnInit()? 
    // Anyway if you want to have some fun comment out this componentWillMount and my dog Remmy will intro this app.
    componentWillMount(){
        this.nextDog();
    }
    

    render() {
        let mainImg;
        let introRemmy = "./remmy-relax.jpg";
        let caption;

        // This condition decides whether to display the intro img and caption
        // I know the this.state.dogImg.length === 0 is cheesy I would wouldn't mind talking about it
        if(this.state.dogImg.length === 0){
            mainImg = introRemmy;
            caption = `Hi I'm Remmy, I'm Mike's best friend! I love other dogs, would you like to see some of my favorite pals!`;
        }else{
            mainImg = this.state.dogImg;
            caption = this.state.randomCaption;
        }

        

        return (
            <div className="mainApp">
                <div class="main-header">
                    <img class="logo" src="./remmyHeadshot.jpg"></img>
                    <h1>Remmy's Dog Show</h1>
                </div>
                
                <div class="main">
                
                    <img class="dog-display" src={mainImg}></img>
                    <p>{caption}</p>
                    <button class="next-dog-btn" onClick={() => this.nextDog()}>
                        {/* this should really be moved to the condition statement above but i wanted to try out how to do and ngIf in React */}
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


