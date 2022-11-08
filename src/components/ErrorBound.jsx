import '../App.css';
import { ErrorBoundary } from "react-error-boundary";
import { BiErrorCircle } from "react-icons/bi";
const ErrorFallback = ({ error}) => {
  return (
    <div className="error-f">
      <h1>Something went wrong</h1>
      <p className="pre" style={{ color: "red" }}><span><BiErrorCircle className="icon-f"/></span><span>{error.message}</span></p>
    </div>
  );
};

const Greeting = ({ subject}) => {
  return (<div>Hello {subject.toUpperCase()}
  </div>);
};

const Farewell = ({ subject }) => {
  return <div>Goodbye {subject.toUpperCase()}</div>;
};
const FavouriteSport = () => {
  return <div>Tennis</div>;
};
const ErrorBound = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting subject='world'/>
        <Farewell/>
        <FavouriteSport/>
      </ErrorBoundary>
    </>
  );
};
export default ErrorBound;



// import React, { components} from 'react'

// class ErrorBoundary extends components {
//   constructor(props) 
//   super(props)

//   this.state = {
//     hasError: false
//   }
// }

// static getDerivedStateFromErro(error) {
//   return{
//     hasError: true
//   }
// }

// render() {
//   if (this.state.hasError) {
//     return <h1>Something went wrong</h1>
//   }
//   return this.props.children
// }

// export default ErrorBoundary;