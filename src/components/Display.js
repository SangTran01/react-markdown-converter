import React from 'react';
import showdown from 'showdown';


const Display = (props) => {
	var converter = new showdown.Converter();
	const formattedInput = converter.makeHtml(props.myInput);


	if (!props.myInput) {
		return(
			<div>
				<p></p>
			</div>
		);
	}
	return(
		<div id="format-text" 
			dangerouslySetInnerHTML={{ __html: formattedInput.toString() }}>
		</div>
	);


};

export default Display;