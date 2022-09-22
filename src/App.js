import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <>
      <Header />
      <div className='container mh-650'>

        <CustomerList />

      </div>

      <Footer />
    </>
  );
}

export default App;
