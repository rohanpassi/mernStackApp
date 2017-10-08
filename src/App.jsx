import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory, withRouter } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx'

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;

const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <IssueAddNavItem />
    </Nav>
  </Navbar>
);

const App = (props) => (
  <div>
    <Header />
    <div className="container-fluid">
      {props.children}
      <hr />
      <h5><small>Copyrights 2017 @ Rohan Passi</small></h5>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

const RoutedApp = () => (
  <Router history={browserHistory} >
    <Redirect from="/" to="/issues" />
    <Route path="/" component={App} >
      <Route path="issues" component={withRouter(IssueList)} />
      <Route path="issues/:id" component={IssueEdit} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}