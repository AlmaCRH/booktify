import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue"
import Bookshelf from "../views/BooksView/Bookshelf.vue"
import BookDetails from "../views/BooksView/BookDetails.vue"

const routes = [
    {
        path:"/",
        name: "Home",
        component: Home
    },
    { 
    path:"/bookshelf",
    name:"Bookshelf",
    component: Bookshelf
    },
    {
        path:"/bookshelf/:id",
        name:"BookDetails",
        component: BookDetails
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router