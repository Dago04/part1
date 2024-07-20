const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  return <p>
    Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
  </p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default App;
