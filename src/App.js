import ModuleOne from "./components/ModuleOne";
import ModuleTwo from "./components/ModuleTwo/ParentComponent";
import ModuleThree from "./components/ModuleThree/MainComponent";
import ModuleFour from "./components/ModuleFour";
import ModuleFive from "./components/ModuleFive";
import ModuleSix from "./components/ModuleSix";
import ModuleSeven from "./components/ModuleSeven";

// Comment/Uncomment each Module

function App() {
  return (
    <div className="container">
      {/* JSX */}
      {/* <ModuleOne /> */}

      {/* State & Props */}
      {/* <ModuleTwo /> */}

      {/* Function & Class Components */}
      {/* <ModuleThree /> */}

      {/* HTML & CSS in React */}
      {/* <ModuleFour /> */}

      {/* Event Handling & Synthetic Events */}
      {/* <ModuleFive /> */}

      {/* Conditional Rendering */}
      {/* <ModuleSix /> */}

      {/* Lists & Keys */}
      <ModuleSeven />
    </div>
  );
}

export default App;
