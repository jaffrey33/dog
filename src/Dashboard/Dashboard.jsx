
import { Tabs } from 'antd';
import Product from './Product';
import Adoption from './Adoption';
const { TabPane } = Tabs;

export default function Dashboard() {
    return (
        <main className="min-h-screen p-8">
            <Tabs defaultActiveKey="1" className='w-full'>
                <TabPane tab="Add Product" key="1">
                    <Product />
                </TabPane>
                <TabPane tab="Adoption" key="2" >
                    <Adoption />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </main>
    )
}