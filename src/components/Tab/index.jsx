import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab.scss";
import Gallery from "../Gallery";
import HandyCrafts from "../HandyCrafts";
export default () => (
  <div className="tab-container">
    <Tabs>
      <TabList>
        <Tab>Design</Tab>
        <Tab>Painting</Tab>
        <Tab>Illustrations</Tab>
        <Tab>Graphic</Tab>
        <Tab>Handicrafts</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
        <Gallery />
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
        <Gallery />
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
        <Gallery />
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
        <Gallery />
      </TabPanel>
      <TabPanel>
        <h2>Any content 5</h2>
        <HandyCrafts />
      </TabPanel>
    </Tabs>
  </div>
);
