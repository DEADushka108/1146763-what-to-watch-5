import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {noop, AppRoute} from '../../mocks/mocks';
import {LoginScreen} from './login-screen';

configure({
  adapter: new Adapter(),
});

const onSubmit = jest.fn();
const onSuccessAuthoriztion = jest.fn();

it(`Should render error message if login fails`, () => {
  const loginScreen = mount(
      <MemoryRouter>
        <LoginScreen
          isAuthorized={false}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={noop}
          onSuccessAuthoriztion={noop}
        />
      </MemoryRouter>
  );
  const errorMessage = loginScreen.find(`div.sign-in__message`);

  expect(errorMessage.length).toBe(1);
});

it(`Should pass correct email and password on form submit`, () => {
  const loginScreen = mount(
      <MemoryRouter>
        <LoginScreen
          isAuthorized={false}
          loginStatus={400}
          onSubmit={onSubmit}
          onFocus={noop}
          onSuccessAuthoriztion={noop}
        />
      </MemoryRouter>
  );
  const loginForm = loginScreen.find(`form.sign-in__form`);
  const emailField = loginScreen.find(`input#user-email`);
  const passwordField = loginScreen.find(`input#user-password`);

  emailField.instance().value = `name@mail.com`;
  passwordField.instance().value = `qwer123`;
  loginForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({login: `name@mail.com`, password: `qwer123`});
});

it(`Should redirect on root screen on success authorization`, () => {
  mount(
      <MemoryRouter>
        <LoginScreen
          isAuthorized={true}
          loginStatus={200}
          onSubmit={noop}
          onFocus={noop}
          onSuccessAuthoriztion={onSuccessAuthoriztion}
        />
      </MemoryRouter>
  );

  expect(onSuccessAuthoriztion).toHaveBeenCalledTimes(1);
  expect(onSuccessAuthoriztion).toHaveBeenCalledWith(AppRoute.ROOT);
});
