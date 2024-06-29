import {
  Navigate,
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { ProfileContainer } from "./modules/profile/profile-container";
import { SignUpContainer } from "./modules/sign-up/sign-up-container";

const rootRoute = createRootRoute({
  component: () => {
    return <Outlet />;
  },
});

const usersRoute = createRoute({
  component: ProfileContainer,
  getParentRoute: () => rootRoute,
  path: "/",
});

const signUpRoute = createRoute({
  component: SignUpContainer,
  getParentRoute: () => rootRoute,
  path: "/sign-up",
});

const notFoundRoute = createRoute({
  component: () => <Navigate to="/sign-up" />,
  getParentRoute: () => rootRoute,
  path: "*",
});

const routeTree = rootRoute.addChildren([usersRoute, signUpRoute, notFoundRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
