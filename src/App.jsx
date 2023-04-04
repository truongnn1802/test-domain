import "./App.css";

function App() {
  const domain = window.location;
  console.log(domain.hostname);
  console.log(domain.hostname.split(".")[0]);

  const templates = {
    "tieu-hoc": <p>Tiểu học</p>,
    "mam-non": <p>Tiểu học</p>,
    thcs: <p>Tiểu học</p>,
    pgd: <p>Tiểu học</p>,
    default: <p>Test</p>,
  };

  console.log(templates[domain.hostname]);
  const renderLayout = () => {
    return templates[domain.hostname] || templates['default'];
  };
  return <div className="App">{renderLayout()}</div>;
}

export default App;
