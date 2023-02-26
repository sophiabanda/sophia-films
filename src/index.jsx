import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.scss";
import { LoginView } from './components/login-view/login-view';
import { SignUp } from './components/signup-view/signup-view';
import { FilmDetails } from './components/film-details/film-details';



const FilmApp = () => {

  return (
    <Container fluid>
      <BrowserRouter>
                <Routes>
                  <Route path='/login' element={<LoginView />}></Route>
                  <Route path='/' element={<MainView />}></Route>
                  <Route path='/signup' element={<SignUp />}></Route>
                  <Route path='/films/:filmTitle' element={<FilmDetails film={film}/>}></Route>
                </Routes>
        </BrowserRouter>
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<FilmApp />);

 {/* <Route
                    path='/films/:id'
                    element={
                        <>
                        {!user ? (
                            <Navigate to='/login' replace />
                        ) : films.length === 0 ? (
                            <div>Sorry! We may have no films to display.</div>
                        ) : (
                            <>
                            <FilmDetails></FilmDetails>
                            </>
                        )
                        }
                        </>
                    }
                    ></Route>
                    <Route
                        path='/signup'
                        element={
                            <>
                            {user ? (
                                <Navigate to='/' />
                            ) : (
                                <SignUp />
                            )}
                          </>
                    }></Route> */}
                    {/* <Route
                    path='/login'
                    element={
                        <MainView></MainView>
                    }></Route> */}

