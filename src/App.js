import Messanger from './components/Messanger';
import {GoogleOAuthProvider} from "@react-oauth/google";


function App() {

const ClintId ="514730231727-kmdt9tmgme3140d7d4t1qufuqn1e63cu.apps.googleusercontent.com";



  return (
    <GoogleOAuthProvider className="App" clientId={ClintId}>
      <Messanger/>
    </GoogleOAuthProvider>
  );
}

export default App;
