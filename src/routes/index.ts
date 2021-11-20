import {
    CompanyScreen,
    DashBoardScreen,
    FavoritesScreen,
    LoginRegistrationScreen,
    SavedSearchScreen,
    SearchScreen,
    AccountingServiceScreen
} from "../pages";

const routes = [
    {
        path: "/",
        component: LoginRegistrationScreen,
        exact: true,
    },
    {
        path: "/dashBoard",
        component: DashBoardScreen,
        exact: true,
    },
    {
        path: "/company/:permalink",
        example: "/company/apple",
        component: CompanyScreen,
        exact: true,
    },
    {
        path: "/search",
        component: SearchScreen,
        exact: true,
    },
    {
        path: "/savedSearchScreen",
        component: SavedSearchScreen,
        exact: true,
    },
    {
        path: "/accounting",
        component: AccountingServiceScreen,
        exact: true,
    },
    {
        path: "/favorites",
        component: FavoritesScreen,
        exact: true,
    },
];

export default routes;