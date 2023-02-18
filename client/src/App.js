import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Layout from './layout/Layout';
import Cours from './pages/Cours/Cours';
import Users from './pages/Users/Users';
import Salles from './pages/Salle/Salles';
import User from './pages/User';
import Members from './pages/Members';
import MemberAdd from './pages/MemberAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/salles"
          element={
            <Layout>
              <Salles />
            </Layout>
          }
        />
        <Route
          path="/members/add"
          element={
            <Layout>
              <MemberAdd />
            </Layout>
          }
        />
        <Route
          path="/members"
          element={
            <Layout>
              <Members />
            </Layout>
          }
        />

        <Route
          path="/users/:userId/update"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />

        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/cours"
          element={
            <Layout>
              <Cours />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
