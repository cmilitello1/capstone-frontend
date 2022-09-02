import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import CreateActivity from "../views/CreateActivity.vue";
import ActivitiesIndex from "../views/ActivitiesIndex.vue";
import EditActivity from "../views/EditActivity.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: () => import("../views/AboutView.vue") },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/create-activity", name: "Create Activity", component: CreateActivity },
  { path: "/find-activity", name: "Fine an Activity", component: ActivitiesIndex },
  { path: "/edit-activity", name: "Edit My Activity", component: EditActivity },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
