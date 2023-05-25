import "./App.css";
import FocusInputUseRef from "./Components/FocusInputUseRef";
import UseRefDeepII from "./Components/UseRefDeepII";
// import Memoize from "./Components/Memoize";
// import ParentComponentA from "./Components/ParentComponentA";
// export const UserContext = createContext();
// export const channelContext = createContext();
function App() {
  // const getName = (name) => {
  //   console.log("Called from App.js Parent " + name);
  // };
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Vivek"}>
        <channelContext.Provider value={"Dhumal"}>
          <CompA />
        </channelContext.Provider>
      </UserContext.Provider> */}
      {/* <ParentComponentA /> */}
      {/* <Memoize /> */}
      <FocusInputUseRef />
      <UseRefDeepII />
    </div>
  );
}

export default App;
