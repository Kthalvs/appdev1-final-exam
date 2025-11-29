import { BrowserRouter } from "react-router-dom";

const basename = "/appdev1-final-exam";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

