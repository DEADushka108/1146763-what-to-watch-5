import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import {Link} from 'react-router-dom';
import {getAuthorization} from '../../store/user/selectors';
import {connect} from 'react-redux';

const UserBlock = (props) => {
  const {isAuthorized} = props;

  return <div className="user-block">
    {isAuthorized ? <Link to={AppRoute.FAVORITE}><div className="user-block__avatar">
      <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
    </div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
  </div>;
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
