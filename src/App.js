import React,{Component} from 'react'
import Header from './components/header';
import './App.css';
import JSON from './db.json';
import NewsList from './components/news_list'
class App extends Component {
  state={
    news:JSON
}
  render(){
    console.log(this.state.news);
    return (
      <>
      <Header />
      <NewsList 
        news={this.state.news}
      />
      </>
    );

  }
}

export default App;
