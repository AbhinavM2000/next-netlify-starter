import  React,{  Component } from 'react';
import ReactDOM from 'react-dom';


class DocView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var url = "https://docs.google.com/viewerng/viewer?url=https://github.com/AbhinavM2000/next-netlify-starter/raw/main/pages/CV.pdf&embedded=true";
        return(
            <iframe height="100%" width="100%" src={url}></iframe>
        );
    }
}

export default DocView;
