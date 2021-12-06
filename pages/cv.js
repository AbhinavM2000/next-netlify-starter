import  React,{  Component } from 'react';
import ReactDOM from 'react-dom';


class DocView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var url = "https://docs.google.com/viewerng/viewer?url=https://github.com/AbhinavM2000/next-netlify-starter/blob/main/pages/cv.pdf"+this.props.src+"&embedded=true";
        return(
            <iframe style={this.props.style} src={url}></iframe>
        );
    }
}

export default DocView;
