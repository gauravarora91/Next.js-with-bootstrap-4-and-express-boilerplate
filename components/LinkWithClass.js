import Router, { withRoute } from 'next/router';

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// and use it manually
// this is done for adding css class styles to Link Component

const onClickHandler = href => event => {
  event.preventDefault();
  Router.push(href);
};

const LinkWithClass = ({ children, route, href }) => {
  return (
    <a href="#" onClick={onClickHandler(href)} className={this.props.className}>
      {children}
    </a>
  );
};

export default withRoute(LinkWithClass);
