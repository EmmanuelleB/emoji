import "./App.css";
import Header from "./components/header/Header";
import Line from "./components/line/Line";
import emoji from "./emoji.json";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [search, setSearch] = useState(emoji.slice(0, 20));

  return (
    <>
      <div className="container">
        <Header title="Emoji Search" emoji={emoji} setSearch={setSearch} search={search} />

        {search.map((item, index) => {
          return <Line key={index} symbol={item.symbol} title={item.title} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
