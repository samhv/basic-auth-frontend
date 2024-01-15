import { useState, createContext, useContext } from 'react';

export enum ROUTES {
    SIGN_IN,
    SIGN_UP,
    ABOUT,
}

type Route = {
    page: ROUTES,
}

export const RouteProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [route, setRoute] = useState<Route>(initialState);
  
    return (
      <StoreContext.Provider value={{ route, setRoute }}>
        {children}
      </StoreContext.Provider>
    );
};

const initialState = {
    page: ROUTES.SIGN_UP,
};

const StoreContext = createContext<{
    route: Route,
    setRoute: (route: Route) => void,
}>({
    route: initialState,
    setRoute: (route: Route) => { route },
});

export const useRoute = () => {
    return useContext(StoreContext)
}
