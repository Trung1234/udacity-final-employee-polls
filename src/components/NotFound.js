import { connect } from "react-redux";

const NotFound = () => {
  return (
    <div>
      <h1 id="heading" data-testid="heading">Error 404</h1>
      <h2 id="description" data-testid="description">Page not found</h2>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(NotFound);
