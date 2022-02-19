import React from 'react'
import { NavLink } from 'react-router-dom';
import Login from './Login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {hide: false};
  }

  handleChildClick(){
    this.setState({hide: true});
  } 

  render() {
    const {hide} = this.state;
    if (hide) {
      return null;
    }
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Login
        <Login onClick={this.handleChildClick.bind(this)} />
        </NavLink>
      </div>
    )
  }
}

