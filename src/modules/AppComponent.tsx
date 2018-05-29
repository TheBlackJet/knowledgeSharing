import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import RootContainer from './root/RootContainer';
import PageNotFound from '../shared-components/PageNotFound';

export type IAppViewProps = RouteComponentProps<undefined>;

const AppView: React.StatelessComponent<IAppViewProps> = () =>
    <div className="app-base">
        <Switch>
            <Route path="/" exact component={RootContainer} />
            <Route component={PageNotFound} />
        </Switch>
    </div>;

export default AppView;
