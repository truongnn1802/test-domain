import "./App.css";

function App() {
  const domain = window.location;
  const hostname = domain.hostname.split(".")[0]

  const templates = {
    "tieu-hoc": <p>Tiểu học</p>,
    "mau-giao":<p>mẫu giáo</p>,
    thcs: <p>thcs</p>,
    phonggiaoduc: <p>phonggiaoduc</p>,
    default: <p>Test</p>,
  };

  console.log(templates[hostname]);
  const renderLayout = () => {
    return templates[hostname] || templates['default'];
  };
  return <div className="App">{renderLayout()}</div>;
}

export default App;
