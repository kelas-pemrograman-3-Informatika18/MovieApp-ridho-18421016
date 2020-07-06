
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboardAdmin', component: () => import('pages/admin/Index.vue') },
      { path: 'inputbarang', name: 'inputbarang', component: () => import('pages/admin/InputBarang.vue') },
      { path: 'datauser', name: 'datauser', component: () => import('pages/admin/DataUser.vue') },
      { path: 'datadvd', name: 'dataDVD', component: () => import('pages/admin/DataDVD.vue') },
      { path: 'formedit/:id', name: 'formEditDVD', component: () => import('pages/admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'homeUser', component: () => import('pages/user/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/user/MyOrder.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/login.vue')
  },
  {
    path: '/register',
    name: 'registerpage',
    component: () => import('pages/guest/register.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
