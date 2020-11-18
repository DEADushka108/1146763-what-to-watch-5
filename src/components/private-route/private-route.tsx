import React, {ReactElement} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../utils/const.js';
import {getAuthorization} from '../../store/user/selectors.js';

interface Props {
  isAuthorized: boolean;
  path: string;
  exact: boolean;
  render: (routeProps: any[]) => ReactElement;
}

const PrivateRoute = (props: Props) => {
  const {render, path, exact, isAuthorized} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          (isAuthorized)
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
