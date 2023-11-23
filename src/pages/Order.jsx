import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../components/Card';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const menu = useLoaderData();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className='min-h-screen pt-36 px-20'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-4 my-10">
                        {salad.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-4 my-10">
                        {pizza.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-4 my-10">
                        {soups.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-4 my-10">
                        {desserts.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-3 gap-4 my-10">
                        {drinks.map(item => <Card key={item._id} item={item} />)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;