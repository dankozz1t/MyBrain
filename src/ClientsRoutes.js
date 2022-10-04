import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './modules/Header';
import Loader from 'shared/components/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const WordsPage = lazy(() => import('pages/WordsPage'));
const TrainPage = lazy(() => import('pages/TrainPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));

const ClientsRoutes = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/words" element={<WordsPage />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default ClientsRoutes;
