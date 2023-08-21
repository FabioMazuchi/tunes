import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/not-found'
import Layout from './components/layout'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { Album } from './pages/album'
import { Favorites } from './pages/favorites'
import { Profile } from './pages/profile'
import { ProfileEdit } from './pages/profile-edit'

function App() {
  return (
    <>
      <Routes>
        <Route path='/tunes' element={ <Login /> } />
        <Route path='/' element={ <Layout /> }>
          <Route path='/home' element={ <Home /> } />
          <Route path='/album/:id' element={ <Album /> } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path='/profile/edit' element={ <ProfileEdit /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Route>
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
