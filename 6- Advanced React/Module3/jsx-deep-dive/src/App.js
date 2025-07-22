import * as React from "react";
import './App.css';

const Button = ({ children, backgroundColor}) => {
  return <button style={{ backgroundColor }}>{children}</button>
}

const Alert = ({ children }) => {
  return (
    <>
      <div className='Overlay' />
      <div className='Alert'>{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

const CreateAlert = () => {
  <div className="App">
    <header>Little Lemon Restaurant 🍕</header>
    <Alert>
      <h4>Delete Account</h4>
      <p>
        Are you sure you want to preceed? You will miss all your delicious recipes!
      </p>
      <DeleteButton />
    </Alert>
  </div>
}

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          },
        });
      })}
    </div>
  );
};

const NewButton = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

const LoginButton = ({ type, children, ...buttonProps}) => {
  return (
    <NewButton 
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!");
      }}
    >
      {children}
    </NewButton>
  )
}

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant 🍕</header>
      <NewButton type="primary" onClick={() => alert("Singing up!")}>
        Sing up
      </NewButton>
      <LoginButton>
        Login
      </LoginButton>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default App;