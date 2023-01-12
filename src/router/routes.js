
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/route",
        component: () => import("pages/RoutePage.vue"),
        children: [
          { path: "", component: () => import("pages/route/RouteSelect.vue") },
          {
            path: "add-route",
            component: () => import("pages/route/AddRoute.vue"),
          },
          {
            path: "saved-routes",
            component: () => import("pages/route/SavedRoutes.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes
