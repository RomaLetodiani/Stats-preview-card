import DescBadges from './Components/DescBadges';
import './Components/style.scss';

function App() {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="preview">
          <header>
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </header>
          <footer>
            <DescBadges title={'10K+'} text={'COMPANIES'} />
            <DescBadges title={'314'} text={'TEMPLATES'} />
            <DescBadges title={'12M+'} text={'QUERIES'} />
          </footer>
        </div>
        <div className="banner"></div>
      </div>
    </div>
  );
}

export default App;
