import React, { Component } from 'react';
import Text from './Text';
import Display from './Display';

class App extends Component {
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

  updateSearch = (search) => {
    console.log('this has been called');
    console.log(search);
    this.setState({myInput:search});
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Markdown to HTML converter</h2>
        </div>
        <p className="App-intro">
          To get started, enter markdown into the text box.
        </p>
        <div className="row">
          <div className="col-md-6">
            <Text onUpdateSearch={this.updateSearch} />
          </div>
          <div className="col-md-6">
            <Display myInput={this.state.myInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
