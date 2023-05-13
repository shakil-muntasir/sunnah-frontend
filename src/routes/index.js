import Employee from '@/pages/Employee.vue'

const routes = [
  { path: '/', component: Employee, meta: {title: "Dashboard"} },
  { path: '/products', component: Employee, meta: {title: "Products"} },
  { path: '/orders', component: Employee, meta: {title: "Orders"} },
  { path: '/marketing', component: Employee, meta: {title: "Marketing"} },
  { path: '/settings', component: Employee, meta: {title: "Settings"} },
]

export default routes
