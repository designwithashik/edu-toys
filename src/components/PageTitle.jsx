import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({children}) => {
    return (
        <div>
            <Helmet>
                <title>EduToys | {children}</title>
            </Helmet> 
        </div>
    );
};

export default PageTitle;