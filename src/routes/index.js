import Login from '@/pages/Login.vue'
import Employee from '@/pages/Employee.vue'
import Products from '@/pages/Products.vue'

const routes = [
  { path: '/', component: Employee, meta: {title: "Dashboard", auth: true} },
  { path: '/products', component: Products, meta: {title: "Products", auth: true} },
  { path: '/orders', component: Employee, meta: {title: "Orders", auth: true} },
  { path: '/marketing', component: Employee, meta: {title: "Marketing", auth: true} },
  { path: '/settings', component: Employee, meta: {title: "Settings", auth: true} },
  
  // auth routes
  { path: '/login', component: Login, meta: {title: "Login"} },
]

export default routes
