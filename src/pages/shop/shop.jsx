import React from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CategoryPage from '../category/category.components';

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryID`} component={CategoryPage} />
    </div>
);

export default ShopPage;