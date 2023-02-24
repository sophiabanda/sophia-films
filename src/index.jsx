import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";

const FilmApp = () => {
  return (
    <Container fluid>
      <MainView></MainView>
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<FilmApp />);

<BrowserRouter>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      </BrowserRouter>