import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'glamor'

export default class Nav extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        <h1 {...css(styles.heading)}>My Recipes</h1>
        <Link to='/' {...css(styles.link)}>Recipes</Link>
        <Link to='/addrecipe' {...css(styles.link)}>New Recipe</Link>
      </div>
    )
  }
}

const styles = {
  link: {
    textDecoration: 'none',
    marginLeft: 15,
    color: 'white',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  container: {
    display: 'flex',
    backgroundColor: '#0c6398',
    padding: '0px 10px',
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    paddingRight: 20
  }
}