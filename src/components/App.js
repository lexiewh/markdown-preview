import Header from "./Header";
import Footer from "./Footer";
import Playground from "./playground/Playground";

function App() {
  return (
    <div id="app" data-cy='app'>
      <Header />
      <Playground />
      <Footer />
    </div>
  );
}

export default App;
