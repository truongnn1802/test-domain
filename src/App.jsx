import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const domain = window.location;
  const hostname = domain.hostname.split(".")[0];
  console.log(domain);

  const titlePage = {
    "tieu-hoc": "Trường tiểu học",
    "mau-giao": "Mẫu giáo",
    thcs: "Trung học cơ sở",
    phonggiaoduc: "Phòng giáo dục",
    default: "Test",
  }

  const templates = {
    "tieu-hoc": <p>Tiểu học</p>,
    "mau-giao": <p>mẫu giáo</p>,
    thcs: <p>thcs</p>,
    phonggiaoduc: <p>phonggiaoduc</p>,
    default: <p>Test</p>,
  };

  console.log(templates[hostname]);
  const renderLayout = () => {
    return templates[hostname] || templates["default"];
  };
  return (
    <>
      <Helmet>
        <title>{titlePage[hostname] || titlePage["default"]}</title>
        <meta name="ABC" content="ABC" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <div className="App">{renderLayout()}</div>
    </>
  );
}

export default App;
