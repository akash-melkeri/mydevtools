
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { name:"tool",path: 'tool/:tool_name', component: () => import('pages/Tool.vue') },
      { path: 'discover', component: () => import('pages/Tool.vue') },
      { path: 'discover/:tool_name', component: () => import('pages/Tool.vue') },
      { path: 'submit-tool/', component: () => import('src/pages/SubmitTool.vue') },
      { path: 'your-favourites/', component: () => import('src/pages/YourFavourites.vue') },
      { path: 'blog/', component: () => import('src/pages/ComingSoon.vue') },
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
