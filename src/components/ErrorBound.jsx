import '../App.css';
import './Home.css'
import { ErrorBoundary } from "react-error-boundary";
import { BiErrorCircle } from "react-icons/bi";
const ErrorFallback = ({ error}) => {
  return (
    <div className="error-boundary">
      <h1>Something went wrong</h1>
      <p className="pre" style={{ color: "red" }}><span><BiErrorCircle className="icon-f"/></span><span>{error.message}</span></p>
       <div className="Error-404"><h1>click the logo-icon to text for Error 404</h1></div>
    </div>
  );
};

const Greeting = ({ subject}) => {
  return (<div>Hello {subject.toUpperCase()}
  </div>);
};

const Goodbye = ({ subject }) => {
  return <div>bye bye {subject.toUpperCase()}</div>;
};
const FavouriteSport = () => {
  return <div>Tennis</div>;
};
const ErrorBound = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting subject='world'/>
        <Goodbye/>
        <FavouriteSport/>
      </ErrorBoundary>
    </>
    
  );
 
};
export default ErrorBound;




