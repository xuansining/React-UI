import React, {Fragment, useState} from 'react';
import Tabs, {Tab} from "./tabs";
import TabPanel from "./tabpane";

const TabsExample = () => {
    const [value, setValue] = useState(0)
    const handleOnChange = (event: React.MouseEvent, newValue: number) => {
        setValue(newValue)
    }

    const [value2, setValue2] = useState(0)
    const handleOnChange2 = (event: React.MouseEvent, newValue: number) => {
        setValue2(newValue)
    }
    return (
        <div>
            <Fragment>
                <div style={{width:'600px'}}>

                    <h1>实例一</h1>
                    <Tabs onTabsChange={handleOnChange} value={value}>
                        <Tab label={'tab1xxxxxxxx'} value={0} key={0}/>
                        <Tab label={'tab2xxxx'} value={1} key={1}/>
                        <Tab label={'tab3xxxx'} value={2} key={2}/>
                    </Tabs>
                    <div>
                        <TabPanel index={0} value={value}>
                            xxx0
                        </TabPanel>
                        <TabPanel index={1} value={value}>
                            xxx1
                        </TabPanel><TabPanel index={2} value={value}>
                        xxx2
                    </TabPanel>
                </div>



            </div>
            </Fragment>

            <Fragment>
                <div style={{width:'600px'}}>
                <h1>实例二 -居中显示</h1>
                <Tabs onTabsChange={handleOnChange2} value={value2} center>
                    <Tab label={'tab1xxxxxxxx'} value={0} key={0}/>
                    <Tab label={'tab2xxxx'} value={1} key={1}/>
                    <Tab label={'tab3xxxx'} value={2} key={2}/>
                </Tabs>
                <div>
                    <TabPanel index={0} value={value2}>
                        xxx0
                    </TabPanel>
                    <TabPanel index={1} value={value2}>
                        xxx1
                    </TabPanel><TabPanel index={2} value={value2}>
                    xxx2
                </TabPanel>


                </div>
                </div>
            </Fragment>
        </div>
    );
};

export default TabsExample;