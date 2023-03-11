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
import Member from './pages/Member';
import Course from './pages/Course';
import CourseAdd from './pages/CourseAdd';
import SalleUpdate from './pages/SalleUpdate';
import AddSalle from './pages/AddSalle';
import ProductsShow from './pages/ProductsShow';
import Navbar from './components/NaVbar';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductAdd from './pages/ProductAdd';
import Coaches from './pages/Coaches';
import CoachAdd from './pages/ChoachAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/coaches/add"
          element={
            <Layout>
              <CoachAdd />
            </Layout>
          }
        />
        <Route
          path="/coaches"
          element={
            <Layout>
              <Coaches />
            </Layout>
          }
        />

        <Route
          path="/shop/products"
          element={
            <div
              style={{
                background: 'black',
                height: '100%',
                minHeight: '100vh',
              }}
            >
              <Navbar isPage />

              <ProductsShow />
            </div>
          }
        />
        <Route
          path="/products/add"
          element={
            <Layout>
              <ProductAdd />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <div
              style={{
                background: 'black',
                height: '100%',
                minHeight: '100vh',
              }}
            >
              <Navbar isPage />

              <Cart />
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/salles/add"
          element={
            <Layout>
              <AddSalle />
            </Layout>
          }
        />
        <Route
          path="/salles/:id/update"
          element={
            <Layout>
              <SalleUpdate />
            </Layout>
          }
        />
        <Route
          path="/salles"
          element={
            <Layout>
              <Salles />
            </Layout>
          }
        />
        <Route
          path="/members/:id/update"
          element={
            <Layout>
              <Member />
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
          path="/cours/:id/update"
          element={
            <Layout>
              <Course />
            </Layout>
          }
        />
        <Route
          path="/cours/add"
          element={
            <Layout>
              <CourseAdd />
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
