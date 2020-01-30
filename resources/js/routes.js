import dashboard from "./components/dashboard";
import passport from './components/passport/index';
import users from "./components/users";
import groups from "./components/groups";

const routes = [
    {path: '/dashboard', name: 'dashboard', component: dashboard},
    {path: '/users', name: 'users', component: users},
    {path: '/groups', name: 'groups', component: groups},
    {path: '/passport', name: 'passport', component: passport},
];

export default routes;
