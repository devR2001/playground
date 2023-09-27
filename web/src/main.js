import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { authState } from "@/store/auth.js";
import i18n from "@/plugins/i18n.js";

import { createRouter, createWebHashHistory } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
import CalculatorVue from "./components/CalculatorVue.vue";
import InputInfo from "./components/InputInfo.vue";
import TodoList from "./components/TodoList.vue";
import ProductList from "./components/ProductList.vue";
import PyramideOutput from "./components/PyramideOutput.vue";
import StartSeite from "./components/StartSeite.vue";
import BlogList from "./components/BlogList.vue";
import MixIn from "./components/MixIn.vue";
import RegisterUser from "./components/RegisterUser.vue";
import RegisteredUsers from "./components/RegisteredUsers.vue";
import QuoteViewer from "./components/QuoteViewer.vue";
import GuessNumber from "./components/GuessNumber.vue";
import DictionaryBook from "./components/DictionaryBook.vue";
import Chart from "./components/ChartDiagramm.vue";
import W3Schools from "./components/W3Schools.vue";
import LoopEx from "./components/LoopEx.vue";
import FizzBuzz from "./components/FizzBuzz.vue";
import PalindromeChecker from "./components/PalindromeChecker.vue";
import MyChat from "./components/MyChat.vue";
import Gallery from "./components/Gallerypage.vue";

const app = createApp(App);

createApp(App);

const routes = [
  { path: "/", component: LoginPage },
  {
    path: "/calculator",
    component: CalculatorVue,
    meta: { requiresAuth: true },
  },
  { path: "/input-info", component: InputInfo, meta: { requiresAuth: true } },
  { path: "/todo", component: TodoList, meta: { requiresAuth: true } },
  { path: "/products", component: ProductList, meta: { requiresAuth: true } },
  {
    path: "/pyramide",
    component: PyramideOutput,
    meta: { requiresAuth: true },
  },
  { path: "/start-seite", component: StartSeite, meta: { requiresAuth: true } },
  { path: "/blog-list", component: BlogList, meta: { requiresAuth: true } },
  { path: "/mixins", component: MixIn, meta: { requiresAuth: true } },
  {
    path: "/register-user",
    component: RegisterUser,
    meta: { requiresAuth: false },
  },
  {
    path: "/registered-users",
    component: RegisteredUsers,
    meta: { requiresAuth: true },
  },
  { path: "/quotes", component: QuoteViewer, meta: { requiresAuth: true } },
  {
    path: "/guess-number",
    component: GuessNumber,
    meta: { requiresAuth: true },
  },
  {
    path: "/dictionary",
    component: DictionaryBook,
    meta: { requiresAuth: true },
  },
  { path: "/diagramm", component: Chart, meta: { requiresAuth: true } },
  { path: "/learning", component: W3Schools, meta: { requiresAuth: true } },
  { path: "/loop", component: LoopEx, meta: { requiresAuth: true } },
  { path: "/loop", component: LoopEx, meta: { requiresAuth: true } },
  { path: "/fizz-buzz", component: FizzBuzz, meta: { requiresAuth: true } },
  {
    path: "/palindrome",
    component: PalindromeChecker,
    meta: { requiresAuth: true },
  },
  {
    path: "/my-chat",
    component: MyChat,
    meta: { requiresAuth: true },
  },
  {
    path: "/gallery",
    component: Gallery,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // Prüfe, ob die Seite eine Authentifizierung erfordert und ob der Benutzer authentifiziert ist
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !authState.isAuthenticated
  ) {
    next({ path: "/" }); // Weiterleitung zur Login-Seite
  } else {
    next(); // Erlaube den Zugriff auf die Seite
  }
});

app.use(router);
app.use(i18n);

app.mount("#app");
