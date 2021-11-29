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
        path: "/login",
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
        path: "/savedSearchScreen",
        element: () => <SavedSearchScreen />,
        exact: true,
    },
    {
        path: "/accounting",
        element: () => <AccountingServiceScreen />,
        exact: true,
    },
    {
        path: "/favorites",
        element: () => <FavoritesScreen />,
        exact: true,
    },
];

export default routes;