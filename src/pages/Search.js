import React, { Component } from "react";
import Header from "../components/Header";
import { getUser } from "../services/userAPI";
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.renderUser();
  }

  async renderUser() {
    const obj = await getUser();
    const nome = obj.name;
    this.setState({ 
      userName: nome,
      loading: false,
    });
    console.log(obj.name);
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? <Loading /> : (
          <h2 data-testid="header-user-name">{userName}</h2>
        )}
      </div>
    );
  }
}

export default Search;
