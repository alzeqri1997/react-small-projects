import './index.css';
import Review from './Review';

function App() {
  return (
    <section className="container">
      <div className="title">
        <h2>Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  );
}

export default App;
