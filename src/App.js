import "./styles.css";
import Header from "./Header";
import MemeContent from "./MemeContent";
import GenerateMeme from "./GenerateMeme";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MemeContent />
      {/* <GenerateMeme /> */}
    </div>
  );
}
