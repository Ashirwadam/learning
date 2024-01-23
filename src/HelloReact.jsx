// A very basic example of a component
const HelloReact = ({name}) => {
  return (
    <>
      <h1>{name} </h1>
    </>
  )
}

// Components are nothing but reusable block of code, which is markup in HTML language. They are used to create the UI.
// The special thing about components in react is they are just functions as can be seen from the definition. And just like any other 
// function, they can be reused again and again

// In frameworks like angular or vue or svelte, the way you write code is very much framework dependent. What makes react special is
// there is no framework specific language. React is just plain old javascript.
export const UsingComponent = () => {
  const names = ["baby", "babe", "babieeee", "sweetheart", "babu!!!"];
  // we can control it conditionally based on certain events from backend or database
  const flag = true;
  // This is conditional rendering
  return (
    <>
      {names.map((item, index) => {
        return <HelloReact name={item} key={index}/>
      })}
      <div>Hello</div>
      {flag && <div style={{backgroundColor: "red", width: "100px", height: "100px"}}></div> }

    </>
  )
}