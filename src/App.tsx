import React, { useEffect, useState } from "react";

import Header from "./components/app-components/Header";
import SearchBar from "./components/app-components/SearchBar";
import Labtests from "./components/app-components/Labtests";
import Banners from "./components/app-components/Banners";
import Featured from "./components/app-components/Featured";

interface PageConfig {
  id: string;
  title?: string;
  props: [];
}

type PageConfigResponse = {
  page_config: PageConfig[];
};

const App: React.FC = () => {
  const [data, setData] = useState<PageConfigResponse | null>(null);

  const getApiData = async () => {
    const apiData = await fetch(
      "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
    );

    if (apiData.ok) {
      const data = await apiData.json();
      setData(data);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // @ts-ignore
  const mainData = data && data[0].page_config;
  console.log(mainData);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <SearchBar />
      <Labtests labTests={mainData} />
      <Banners bannerDetails={mainData} />
      <Featured featuredDetails={mainData} />
    </div>
  );
};

export default App;
