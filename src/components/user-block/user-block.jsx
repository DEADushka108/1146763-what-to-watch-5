import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute} from '../../utils/const';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorization, getUserInfo} from '../../store/user/selectors';
import {userDetails} from '../../types/types';

const UserBlock = (props) => {
  const {isAuthorized, userInfo} = props;
  const {avatar, name} = userInfo;

  return <div className="user-block">
    {isAuthorized ? <Link to={AppRoute.FAVORITE}><div className="user-block__avatar">
      <img src={avatar} alt={name} width="63" height="63"/>
    </div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
  </div>;
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userInfo: userDetails,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
  userInfo: getUserInfo(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
