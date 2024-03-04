import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactGa from 'react-ga';

interface IWrapperProps {
    initialize: boolean;
    children: React.PropsWithChildren<any>;
}
const Wrapper: React.FC<IWrapperProps> = (props) => {
    const location = useLocation();
    const { initialize, children } = props;
    useEffect(() => {
        if (initialize) {
            ReactGa.pageview(location.pathname + location.search);
        }
    }, [initialize, location])


    return children;
}

export default Wrapper