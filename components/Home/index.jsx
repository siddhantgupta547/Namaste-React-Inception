import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
