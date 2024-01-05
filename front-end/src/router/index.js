import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Bookshelve from "../views/BooksView/Bookshelve.vue";
import BookDetails from "../views/BooksView/BookDetails.vue";
import Login from "../views/Login.vue";
import Singup from "../views/Singup.vue";
import AboutUs from "../views/AboutUs.vue"
import Profile from "../views/Profile.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bookshelve",
    name: "Bookshelve",
    component: Bookshelve,
  },
  {
    path: "/bookshelve/:id",
    name: "BookDetails",
    component: BookDetails,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/singup",
    name: "Singup",
    component: Singup,
  },
  {
    path:"/aboutus",
    name:"AboutUs",
    component: AboutUs
  },
  {
    path:"/profile",
    name:"Profile",
    component: Profile
  },
  {
    path: "/github",
    name: "Github",
    beforeEnter() {
      location.href = "https://github.com/AlmaCRH";
    },
  },
  {
    path: "/linkedin",
    name: "Linkedin",
    beforeEnter() {
      location.href = "https://www.linkedin.com/";
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
