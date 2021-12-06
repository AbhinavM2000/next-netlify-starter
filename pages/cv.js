import  React,{  Component } from 'react';
import ReactDOM from 'react-dom';


class DocView extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var url = "https://docs.google.com/viewerng/viewer?url=https://github.com/AbhinavM2000/next-netlify-starter/raw/main/pages/CV.pdf&embedded=true";
        return(
         <div align="center">   <iframe height="1280px" width="720px" src={url}></iframe></div>
        );
    }
}

export default DocView;
