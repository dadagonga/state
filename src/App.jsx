import { Component } from 'react'
import './App.css'
import { UserClass, UserFunction, UserChildren } from '../components'

const users = [
  {name: 'Marko', years:'35'},
  {name: 'Ivan', years:'30'},
  {name: 'Ana', years:'25'},
] 

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        {name: 'Marko', years:35},
        {name: 'Ivan', years:30},
        {name: 'Ana', years:25},
       ],
       tekst: "Proizvoljan tekst"
    }
  }

  uvecajGodine = () => {
    const newUsers = this.state.users.map (user => {
      return {...user, years: user.years + 1 }
    })
    this.setState({users: newUsers})
  }

  render(){
    const {users, tekst} = this.state
    return (
        <>
          <h1>State</h1>
          < UserClass name={users[0].name} years={users[0].years}/>
          < UserFunction name={users[1].name} years={users[1].years}/>
          < UserChildren name={users[2].name} years={users[2].years}>
            a hobi mi je programiranje...
          <p>{tekst}</p>
          </UserChildren>
          <button onClick={this.uvecajGodine}> Uvećaj godine</button>
        </>
    )
  }
  
}

export default App
