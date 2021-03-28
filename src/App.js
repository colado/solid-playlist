import "./App.css";
import {
  LoginButton,
  Text,
  useSession,
  CombinedDataProvider,
} from "@inrupt/solid-ui-react";

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
          <div className="message logged-in">
            <span>You are logged in as: </span>
            <Text
              properties={[
                "http://www.w3.org/2006/vcard/ns#fn",
                "http://xmlns.com/foaf/0.1/name",
              ]}
            />
          </div>
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
