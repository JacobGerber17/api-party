import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://api.github.com/users/${params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    return (
      <div className="GithubUser">
        <img src={user.avatar_url} alt="" />
        <h2>
          <a href={user.html_url} target="_blank">
            {user.name} ({user.login})
          </a>
        </h2>
        <h3>{user.location}</h3>
      </div>
    )
  }
}

export default GithubUser