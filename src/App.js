import "./App.css";
import {
  LoginButton,
  useSession,
  CombinedDataProvider,
} from "@inrupt/solid-ui-react";
import Home from "./components/Home";

const authOptions = {
  clientName: "Solid Todo App",
};

function App() {
  const { session } = useSession();

  return (
    <div className="app-container">
      {session.info.isLoggedIn ? (
        <CombinedDataProvider
          datasetUrl={session.info.webId}
          thingUrl={session.info.webId}
        >
          <Home />
        </CombinedDataProvider>
      ) : (
        <LoginButton
          oidcIssuer="https://inrupt.net/"
          redirectUrl={window.location.href}
          authOptions={authOptions}
        />
      )}
    </div>
  );
}

export default App;
