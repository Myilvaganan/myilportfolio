import expenseTracker from '../images/proImgs/expense-tracker.png';
import foodRecipe from '../images/proImgs/food-recipe.png';
import todoList from '../images/proImgs/toto-list.png';
import netflixClone from '../images/proImgs/netflixClone.png';
import todoListJs from '../images/proImgs/todo-list-js.png';
import githubSearch from '../images/proImgs/githubSearch.png';
import colorFlipper from '../images/proImgs/color-flipper.png';
import navbarSticky from '../images/proImgs/navbar-sticky.png';
import florashop from '../images/proImgs/florashop.png';
import dairyManager from '../images/proImgs/dairyManager.png';
import myPortfolio from '../images/proImgs/myPortfolio.png';
import moneyManager from '../images/proImgs/expenseManager.jpg';
import DevConnector from '../images/proImgs/DevConnector.jpg';
import GreenEvents from '../images/proImgs/GreenEvents.jpg';




const portfolios = [
	{
		id: 14,
		category: 'Next Js',
		deploy: 'https://greeneventsmyil.vercel.app/',
		repo: 'https://github.com/Myilvaganan/GreenEvents',
		icon1: 'D',
		icon2: 'G',
		image: GreenEvents,
		description: 'A social network application to gather peoples to plant trees',
		title: 'Green Events'
	},
	{
		id: 13,
		category: 'MERN',
		deploy: 'https://tranquil-forest-90914.herokuapp.com/',
		repo: 'https://github.com/Myilvaganan/DevConnector',
		icon1: 'D',
		icon2: 'G',
		image: DevConnector,
		description: 'A Social Network Application to connect with Developers',
		title: 'DevConnector'
	},
	{
		id: 12,
		category: 'MERN',
		deploy: 'https://expense-manager-myil.herokuapp.com/',
		repo: 'https://github.com/Myilvaganan/ExpenseManager-MERN',
		icon1: 'D',
		icon2: 'G',
		image: moneyManager,
		description: 'Manage your expenses and Know your savings!',
		title: 'Expense Manager'
	},
	{
		id: 9,
		category: 'MERN',
		deploy: 'https://florashopapp.herokuapp.com/',
		repo: 'https://github.com/Myilvaganan/florashop',
		icon1: 'D',
		icon2: 'G',
		image: florashop,
		description: 'A site to Buy and Sell Plants Online',
		title: 'E-Commerce FLoraShop'
	},
	{
		id: 10,
		category: 'MERN',
		deploy: 'https://diary-manager.netlify.app/',
		repo: 'https://github.com/Myilvaganan/diary-project-MERN',
		icon1: 'D',
		icon2: 'G',
		image: dairyManager,
		description: 'write your memories with me!',
		title: 'Dairy Manager'
	},
	{
		id: 11,
		category: 'React Js',
		deploy: 'https://myilvaganan.github.io/myilportfolio',
		repo: 'https://github.com/Myilvaganan/myilportfolio',
		icon1: 'D',
		icon2: 'G',
		image: myPortfolio,
		description: 'My Portfolio website',
		title: 'My Portfolio'
	},
	{
		id: 1,
		category: 'React Js',
		deploy: 'https://myilvaganan.github.io/expense-tracker-react-hooks/',
		repo: 'https://github.com/Myilvaganan/expense-tracker-react-hooks',
		icon1: 'D',
		icon2: 'G',
		image: expenseTracker,
		description: 'Track your Expenditures',
		title: 'Expense-Tracker ReactJs'
	},
	{
		id: 2,
		category: 'React Js',
		deploy: 'https://myilvaganan.github.io/recipe-food-app-react/',
		repo: 'https://github.com/Myilvaganan/recipe-food-app-react',
		icon1: 'D',
		icon2: 'G',
		image: foodRecipe,
		description: 'Search Food Online and Know Recipe of it',
		title: 'Food Recipe Search App'
	},
	{
		id: 3,
		category: 'React Js',
		deploy: 'https://myilvaganan.github.io/todo-list-react/',
		repo: 'https://github.com/Myilvaganan/todo-list-react',
		icon1: 'D',
		icon2: 'G',
		image: todoList,
		description: 'Basic Todo List create, edit and delete',
		title: 'Basic Todo-List'
	},
	{
		id: 4,
		category: 'React Js',
		deploy: 'https://myilvaganan.github.io/netflix-clone/',
		repo: 'https://github.com/Myilvaganan/netflix-clone',
		icon1: 'D',
		icon2: 'G',
		image: netflixClone,
		description: 'Netflix Clone with stunning posters',
		title: 'Netflix Clone'
	},
	{
		id: 5,
		category: 'JavaScript',
		deploy: 'https://github.com/Myilvaganan/todo-list',
		repo: 'https://myilvaganan.github.io/todo-list/',
		icon1: 'D',
		icon2: 'G',
		image: todoListJs,
		description: 'To do list with elegant animation',
		title: 'Todo-List'
	},
	{
		id: 6,
		category: 'JavaScript',
		deploy: 'https://githubprofilesearcher-myil.netlify.app/',
		repo: 'https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/GitHub%20Profiles',
		icon1: 'D',
		icon2: 'G',
		image: githubSearch,
		description: 'Search GitHub profiles of worldwide GitHub users',
		title: 'GitHub Profile Search'
	},
	{
		id: 7,
		category: 'CSS',
		deploy: 'https://clever-borg-6e430d.netlify.app/',
		repo: 'https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/Color%20Flipper',
		icon1: 'D',
		icon2: 'G',
		image: colorFlipper,
		description: 'A treat to eyes with millions of colors',
		title: 'Color Flipper'
	},
	{
		id: 8,
		category: 'CSS',
		deploy: 'https://myilprojects-navbarsticky.netlify.app/',
		repo: 'https://github.com/Myilvaganan/FULL-STACK/tree/main/Projects/NavBar-Sticky',
		icon1: 'D',
		icon2: 'G',
		image: navbarSticky,
		description: 'Simple way of implementing a nav-bar sticky',
		title: 'Sticky NavBar'
	}
];

export default portfolios;
