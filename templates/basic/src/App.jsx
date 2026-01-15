import "./App.css";
import "./index.css";
import Demo from "./Demo/Demo";
import SmoothScroll from "./components/utility/SmoothScroll";

function App() {
  return (
    <>
    {/* wrap everything inside the SmoothScroll component for smooth scrolling */}
    <SmoothScroll>
      <Demo />
    </SmoothScroll>
    </>
  );
}

export default App;
