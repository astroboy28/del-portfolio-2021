/* eslint-disable react/no-danger */
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import "../styles/index.css";

const App = ({ Component, pageProps }) => (
  <>
    <Layout>
        <Component {...pageProps} />
    </Layout>
  </>
);

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object
};

export default App;
