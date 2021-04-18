import expenseTracker from '../images/proImgs/expense-tracker.png';
import foodRecipe from '../images/proImgs/food-recipe.png';
import todoList from "../images/proImgs/toto-list.png"
import netflixClone from "../images/proImgs/netflixClone.png";
import todoListJs from "../images/proImgs/todo-list-js.png";
import githubSearch from "../images/proImgs/githubSearch.png";
import colorFlipper from "../images/proImgs/color-flipper.png";
import navbarSticky from "../images/proImgs/navbar-sticky.png";
import florashop from "../images/proImgs/florashop.png";


const portfolios = [
  {
    id: 9,
    category: "Node Js",
    deploy: "https://florashopapp.herokuapp.com/",
    repo: "https://github.com/Myilvaganan/florashop",
    icon1: "D",
    icon2: "G",
    image: florashop,
    description: "A site to Buy and Sell Plants Online",
    title: "E-Commerce FLoraShop",
  },
  {
    id: 1,
    category: "React Js",
    deploy: "https://myilvaganan.github.io/expense-tracker-react-hooks/",
    repo: "https://github.com/Myilvaganan/expense-tracker-react-hooks",
    icon1: "D",
    icon2: "G",
    image: expenseTracker,
    description: "Track your Expenditures",
    title: "Expense-Tracker",
  },
  {
    id: 2,
    category: "React Js",
    deploy: "https://myilvaganan.github.io/recipe-food-app-react/",
    repo: "https://github.com/Myilvaganan/recipe-food-app-react",
    icon1: "D",
    icon2: "G",
    image: foodRecipe,
    description: "Search Food Online and Know Recipe of it",
    title: "Food Recipe Search",
  },
  {
    id: 3,
    category: "React Js",
    deploy: "https://myilvaganan.github.io/todo-list-react/",
    repo: "https://github.com/Myilvaganan/todo-list-react",
    icon1: "D",
    icon2: "G",
    image: todoList,
    description: "Basic Todo List create, edit and delete",
    title: "Basic Todo-List",
  },
  {
    id: 4,
    category: "React Js",
    deploy: "https://myilvaganan.github.io/netflix-clone/",
    repo: "https://github.com/Myilvaganan/netflix-clone",
    icon1: "D",
    icon2: "G",
    image: netflixClone,
    description: "Netflix Clone with stunning posters",
    title: "Netflix Clone",
  },
  {
    id: 5,
    category: "JavaScript",
    deploy: "https://github.com/Myilvaganan/todo-list",
    repo: "https://myilvaganan.github.io/todo-list/",
    icon1: "D",
    icon2: "G",
    image: todoListJs,
    description: "To do list with elegant animation",
    title: "Todo-List",
  },
  {
    id: 6,
    category: "JavaScript",
    deploy: "https://githubprofilesearcher-myil.netlify.app/",
    repo:
      "https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/GitHub%20Profiles",
    icon1: "D",
    icon2: "G",
    image: githubSearch,
    description: "Search GitHub profiles of worldwide GitHub users",
    title: "GitHub Profile Search",
  },
  {
    id: 7,
    category: "CSS",
    deploy: "https://clever-borg-6e430d.netlify.app/",
    repo:
      "https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/Color%20Flipper",
    icon1: "D",
    icon2: "G",
    image: colorFlipper,
    description: "A treat to eyes with millions of colors",
    title: "Color Flipper",
  },
  {
    id: 8,
    category: "CSS",
    deploy: "https://myilprojects-navbarsticky.netlify.app/",
    repo:
      "https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/NavBar-Sticky",
    icon1: "D",
    icon2: "G",
    image: navbarSticky,
    description: "Simple way of implementing a nav-bar sticky",
    title: "Sticky NavBar",
  },
];

export default portfolios;