import React, { Component } from 'react';
import CardList from './Component/List-Card/List-Card.Component.jsx'
import './App.css';
import SearchBox from './Component/SearchBox/searchbox.component.jsx'
  
class App extends  Component{
                                    constructor(){
                                      super();
                                      this.state={
                                        monsters:[],
                                        searchField :'',
                                      }
                                    }
                                    componentDidMount(){
                                      fetch('https://jsonplaceholder.typicode.com/users')
                                      .then(response => response.json())
                                      .then(users => this.setState({monsters:users}))
                                    }
                                    
                                    
                                    render()
                                    {

                                    const monsters=this.state.monsters;
                                    const searchField=this.state.searchField
                                    const filteredMonst = monsters.filter(monster =>  {return monster.name.toLowerCase().includes(searchField.toLowerCase())})
                                      return(
                                        <div className='App'>
                                             <h1>Monster Roledux</h1>
                                            <SearchBox placeholder='Search Name'
                                            handleChange={e => this.setState({searchField : e.target.value})}  />
                                            <CardList  monsters={filteredMonst}/>
                                        </div>

                                      
                                      );
                                    }

}
export default App;