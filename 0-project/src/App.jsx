import Header from "./Header";
import Card from "./Card";
import "./Card.css";

function App() {
  return (
    <>
      <Header />

      <div className="all-cards">
        <Card
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
          title="HTML5"
          description="Learn the structure of modern web pages using HTML5 elements, forms, tables, and semantic tags."
        />

        <Card
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
          title="CSS3"
          description="Style your websites with colors, layouts, Flexbox, Grid, animations, and responsive design."
        />

        <Card
          img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
          title="JavaScript"
          description="Make your websites interactive by learning variables, functions, DOM manipulation, and ES6 features."
        />
      </div>
    </>
  );
}

export default App;
