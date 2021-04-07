import { UserStorage } from './UserContext'; 
import Routes from './routes';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <>
      <UserStorage>
        <GlobalStyle />
        <Routes />
      </UserStorage>
    </>
  );
}

export default App;
