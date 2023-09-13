import { Component } from "react"

export default class UserChildren extends Component{
render() {
    const {name, years, children} = this.props
        return (
            <>
            <p>Pozdrav, moje ime je {name} i imam {years} godina.</p>
            {children}
            </>
        )   
    }
}
