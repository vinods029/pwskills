
function Person(props) {
    return (
      <p>
        {props.name} is {props.age} years old.
      </p>
    );
  }
  
  // Usage
  <Person name="John" age="30" />
  