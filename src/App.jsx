import { useState } from 'react'
import './App.css'
import { UserClass, UserFunction, UserChildren } from '../components'

// const users = [
//   {name: 'Marko', years:'35'},
//   {name: 'Ivan', years:'30'},
//   {name: 'Ana', years:'25'},
// ] 

export function App() {
    const inicUseri = [
            { name: 'Irena', years: 38 },
            { name: 'Petar', years: 40 },
            { name: 'Iskra', years: 6 },
            { name: 'Walter', years: 3 },
          ];
    
    const tekst = "Stisni da ostarimo"
    
    const [users, setUsers] = useState(inicUseri);

    const uvecajGodine = () => {
        setUsers(prevState => {
          const newUsers = prevState.map (user => {
            return {...user, years: user.years + 1 }
        })
        return newUsers
        })
    }
  return (
        <>
          <h1>Život</h1>
          < UserClass name={users[0].name} years={users[0].years}/>
          < UserFunction name={users[1].name} years={users[1].years}/>
          < UserChildren name={users[2].name} years={users[2].years}/>
          < UserChildren name={users[3].name} years={users[3].years}>
          kako ćemo stariti :)
          <p>{tekst}</p>
          </UserChildren>
          <button onClick={uvecajGodine}> Uvećaj za godinu</button>
        </>
    )
  }
export default App
