import './App.css'; // import file css
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './component/Content';
import Footer from './component/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Content />
      </div>
      <Footer />
    </>
  );
}