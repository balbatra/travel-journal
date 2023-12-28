import Card from "./components/Card";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import data from "./data.jsx"

const cards = data.map(card => {
  return <Card key={card.key} {...card} />;
});

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="card--list">
          {cards}
        </section>
      </main>
      <Footer/>
    </>
  );

}

export default App;
