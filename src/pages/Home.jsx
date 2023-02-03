/* eslint-disable global-require */

import React, { useEffect, useState } from 'react';
import Calculator from '../playground/Calculator';

// import Input from '../components/form/Input';
const iconData = ['AccountIcon', 'cart'];
function Home() {
  const [icon, setIcons] = useState([]);

  useEffect(() => {
    const icons = iconData.map((name) => {
      const Icon = React.lazy(() => import(`../assets/icon/${name}`));
      return Icon;
    });
    setIcons(icons);
  }, []);
  return (
    // <ErrorBoundary>
    //   <div>
    //     {icon.map((Icon) => (
    //       <Icon key={Math.random()} />
    //     ))}
    //     <h1>Home</h1>
    //   </div>
    // </ErrorBoundary>
    <>
      {/* <Carousel autostart />
      <Category /> */}
      <Calculator />
    </>
  );
}

export default Home;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>{error}</h1>;
    }
    const { children } = this.props;
    return children;
  }
}
