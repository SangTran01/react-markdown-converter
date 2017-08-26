import React, {Component} from 'react';

class Text extends Component {
	constructor(props){
		super(props);

		this.state = {
			myInput:"Heading\n" +
					"=======\n" +
					"       \n" +
					"Sub-heading\n" +
					"-----------\n" +
					"### Another deeper heading\n" +
					"       \n" +
					"## Blockquotes\n" +
					"```md\n" +
					"In the words of Abraham Lincoln:\n" +
					"       \n" +
					"> Pardon my french\n" +
					"```\n" +
					"Text attributes *italic*, **bold**, \n" +
					"`monospace`, ~~strikethrough~~ .\n" +
					"       \n" +
					"Shopping list:\n" +
					"       \n" +
					"  * apples\n" +
					"  * oranges\n" +
					"  * pears\n" +
					"       \n" +
					" *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
		}
	}

	onInputChange(term){
		//setState to see what we typed
		this.setState({myInput:term});
		this.props.onUpdateSearch(term);
	}

	render(){
		return(
			<div>
				<textarea 
					rows="20" 
					cols="50"
					value={this.state.myInput} 
					onChange={(event) => this.onInputChange(event.target.value)}>
				</textarea>
			</div>
		);
	}
}

export default Text;