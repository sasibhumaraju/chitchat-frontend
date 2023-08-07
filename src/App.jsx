import './App.css'
import ContactsBridge from './bridge/ContactsBridge';
import UserList from './components/screens/UserList';
import UseSearchBar from './hooks/UseSearchBar';
import SearchBar from './hooks/UseSearchBar';
import RoutesComponent from './routes/RoutesComponent';

function App() {
  return (
      <section className='app'>
          <RoutesComponent/>
          {/* <UserList/> */}
      </section>
  )
}

export default App
