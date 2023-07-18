import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div className='container d-flex justify-content-between align-items-center align-content-center hero-container'>
        <div className='profile'>
          <img class="rounded-circle profile-img"
            src="https://assets.website-files.com/63f2b1af8b98d1733162ebc2/63f39b511f945c75dec37ea7_63c9626b87a25c3d2e2625f4_d2VpIM2-xeKU79vIwL42PR6zR7breHtjuCfOPiSD6Svri6iV-inqzyh1wm8C0hDzW-mQgNnfL8pviTGUu7-654Pud0TwuB4mVXOeX1Aq1_-uEthy86GjQszBTrGWbM25XYdhV4AOth6nY4-dnB72qNEC6EPYlTONbi6eZKL9IHhnuJKywEAZ3vYOJjpfvg.png" />
        </div>
        <div class="description-container">
          <h3 class="description">Hello! I'm Vivek, a <br/>Software developer based in Mumbai</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
