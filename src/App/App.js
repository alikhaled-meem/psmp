import Dashboard from "./modules/Dashboard";
import Settings from "./modules/Settings";

const App = () => {
  let lang = "en";
  let theme = "1";
  return (
    <div className='App'>
      {/*<Dashboard />*/}
      <Settings lang={lang} theme={theme} />
    </div>
  );
};

export default App;
