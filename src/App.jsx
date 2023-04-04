import "./App.css";

function App() {
  const domain = window.location;
  const hostname = domain.hostname.split(".")[0]

  const templates = {
    "tieu-hoc": <p>Tiểu học</p>,
    "mam-non": <p>mẫu giáo</p>,
    thcs: <p>thcs</p>,
    phonggiaoduc: <p>phonggiaoduc</p>,
    default: <p>Test</p>,
  };

  console.log(templates[hostname]);
  const renderLayout = () => {
    return templates[hostname] || templates['tieu-hoc'];
  };
  return <div className="App">{renderLayout()}</div>;
}

export default App;
