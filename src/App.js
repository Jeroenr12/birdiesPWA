import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./services/firebase";
import 'react-tabs/style/react-tabs.css';
import {BirdProvider} from "./contexts/birdContext";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ViewBirdPage} from "./pages/ViewBirdPage";
import {MakeBirdPage} from "./pages/MakeBirdPage";


function ProvidedApp(){
  return(
    <div className="max-w-100">
        <h1 className="text-center fs-1">Birds</h1>
      <Tabs>
        <TabList>
            <Tab>View birds</Tab>
            <Tab>Make birds</Tab>
        </TabList>
        <TabPanel>
            <ViewBirdPage/>
        </TabPanel>
        <TabPanel>
            <MakeBirdPage/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

function App() {
  return (
    <BirdProvider>
        <ProvidedApp/>
    </BirdProvider>
  );
}

export default App;
