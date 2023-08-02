import { Provider } from "react-redux";
import "./App.css";
import Router from "./routes";
import store from "./stores";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Provider store={store}>
          <Router />
        </Provider>
      </>
    )
  );
}

export default App;
