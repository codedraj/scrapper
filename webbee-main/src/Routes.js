import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import { Fixed as FixedLayout } from './layouts';

// Landing pages

import { Home as HomeView } from './views/landingPages';
// Supporting pages

// Authentication pages
import {
  SignupSimple as SignupSimpleView,
  Signup as SignupView,
  LoginSimple as LoginSimpleView,
  Login as LoginView,
} from './views/authPages';

import {
  NotFound as NotFoundView,
  ForgotPassword as ForgotPasswordView,
} from './views/supportingPages';

// Documentation pages

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={LoginSimpleView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/forgot-password"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ForgotPasswordView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/signup"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={LoginView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/add"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={SignupSimpleView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/all"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        exact
        path="/edit"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={SignupView}
            layout={FixedLayout}
          />
        ))()}
      />

      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={FixedLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
