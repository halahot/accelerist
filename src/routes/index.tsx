import {
    ProspectScreen, 
    CompanyScreen,
    DashBoardScreen,
    FavoritesScreen,
    LoginRegistrationScreen,
    ProspectNavigatorScreen,
    SearchScreen
} from "../pages";

const routes = [
    {
        path: "/login",
        element: () => <LoginRegistrationScreen />,
        exact: true,
    },
    {
        path: "/reset",
        element: () => <LoginRegistrationScreen />,
        exact: true,
    },
    {
        path: "/",
        element: () => <DashBoardScreen />,
        exact: true,
    },
    {
        path: "/company/:permalink",
        example: "/company/apple",
        element: () => <CompanyScreen />,
        exact: true,
    },
    {
        path: "/search",
        element: () => <SearchScreen />,
        exact: true,
    },
    {
        path: "/prospects",
        element: () => <ProspectNavigatorScreen />,
        exact: true,
    },
    {
        path: "/prospects/:permalink",
        element: () => <ProspectScreen />,
        exact: true,
    },
    {
        path: "/favorites",
        element: () => <FavoritesScreen />,
        exact: true,
    },
];

export default routes;