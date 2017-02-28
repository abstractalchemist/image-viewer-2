import React from 'react';
import ReactDOM from 'react-dom';

function Image({url}) {
    return (<div className="mdl-cell mdl-cell--6-col">
	    <img src={url} style={{width:"100%"}}></img>
	    </div>)
}

class Main extends React.Component {
    constructor() {
	super()
	this.state = {state:1};
	this.timeout_sec = 10000;
    }

    componentDidMount() {
	
	setInterval(_ => {
	    console.log("refreshing pict");
	    this.setState({state:this.state.state+1});
	}, this.timeout_sec);
    }

    componentWillUnmount() {
    }

    render() {
	return (<div className="mdl-layout mdl-js-layout">
		<header className="mdl-layout__header">
		</header>
		<main className="mdl-layout__content">
		<div className="mdl-grid">
		<Image url={"http://localhost:8081/images/" + this.state.state} />
		<Image url={"http://localhost:8081/images/" + (this.state.state + 4)} />
		</div>
		</main>
		</div>)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Main />, document.getElementById('content'))
})
			  
