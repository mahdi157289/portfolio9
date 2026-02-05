/**
 * File Role: Routing Configuration
 * Utility: Defines the application's route structure.
 * Technical description: Exports an array of route objects mapping paths to components.
 * Workflow inside the file:
 *  1. Imports page components.
 *  2. Defines route objects.
 * Relation with other files: Imported by `App.jsx` to render the correct page (conceptually).
 * Overall utility in the project: Centralizes routing logic for future scalability.
 */

import Home from './pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
    title: 'Home'
  }
];

export default routes;
