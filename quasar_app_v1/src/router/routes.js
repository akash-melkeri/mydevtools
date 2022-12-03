
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  
]

export default routes
