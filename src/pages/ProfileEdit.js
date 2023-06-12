import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import profile from '../images/profile.png';

const MIN_NOME = 3;

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = { image: null, name: '' };
  }

  componentDidMount() {
    this.updateUser();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  updateUser = async () => {
    const { image, name } = await getUser();
    this.setState({ image, name });
  }

  saveModifications = async () => {
    const { name, image } = this.state;
    if (name.length < MIN_NOME) {
      Swal.fire({
        icon: 'error',
        text: 'O campo nome não pode ter menos que três letras!',
      });
    } else {
      updateUser({ name, image });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Perfil atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  upload = ({ target: { files } }) => {
    this.setState({
      image: URL.createObjectURL(files[0]),
    });
  }

  render() {
    const { image, name } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {(image === '' || image !== null) ? (
          <main className="profile-edit">
            <h1>Profile Edit</h1>
            <form>
              <label htmlFor="arquivo">
                {image === '' ? (
                  <img className="default-image" src={ profile } alt={ name } />
                ) : (
                  <img className="selected-image" src={ image } alt={ name } />
                )}
                <span>Trocar Imagem</span>
                <input
                  id="arquivo"
                  type="file"
                  accept="image/*"
                  onChange={ this.upload }
                />
              </label>
            </form>
            <label className="name" htmlFor="name">
              Nome:
              <input
                onChange={ this.handleChange }
                name="name"
                type="text"
                id="name"
                value={ name }
              />
            </label>
            <button onClick={ this.saveModifications } type="button">Salvar</button>
          </main>
        ) : (<h3 className="loading">Loading...</h3>)}
      </div>
    );
  }
}

export default ProfileEdit;
