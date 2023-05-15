import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Employee from '@/pages/Employee.vue'
import Products from '@/pages/Products/Index.vue'
import ProductsCreate from '@/pages/Products/Create.vue'
import ProductsEdit from '@/pages/Products/Edit.vue'

const routes = [
  { path: '/', component: Dashboard, meta: {title: "Dashboard", auth: true} },
  { path: '/products', component: Products, meta: {title: "Products", auth: true} },
  { path: '/products/create', component: ProductsCreate, meta: {title: "Create Product", auth: true} },
  { path: '/products/:id/edit', component: ProductsEdit, meta: {title: "Edit Product", auth: true} },
  { path: '/orders', component: Employee, meta: {title: "Orders", auth: true} },
  { path: '/marketing', component: Employee, meta: {title: "Marketing", auth: true} },
  { path: '/settings', component: Employee, meta: {title: "Settings", auth: true} },
  
  // auth routes
  { path: '/login', component: Login, meta: {title: "Login"} },
]

export default routes
