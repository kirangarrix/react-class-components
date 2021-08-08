import React,{Component} from 'react'
import Header from './components/header';
import './App.css';
import JSON from './db.json';
import NewsList from './components/news_list'
import Footer from './components/footer';
import Life from './components/lifecycle';
class App extends Component {
  state={
    news:JSON,
    filtered:JSON,
    footerText:'i am a happy footer',
    active:true
}

 getKeywords=(event)=>{
   let keywords=event.target.value;
   let filtered=this.state.news.filter((item)=>{
     return item.title.indexOf(keywords)>-1;
   });

   
    this.setState({
        filtered
    });
 }


  render(){

    const {news,footerText,filtered}=this.state;
    
    return (
      <>
      <Header
      keywords={this.getKeywords}
       />
      <NewsList 
        news={filtered}
      />
      {
        this.state.active?
        <Life/>
       : null 
     }
      
      <button onClick={()=>this.setState({active:!this.state.active})}>CLICK</button>
      <Footer
        footerText={footerText}
      />
      </>
    );

  }
}

export default App;
