import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PrimaryHeader } from '../../components'
import { AppHomePage } from '../pages'

// Sub Layouts
import UserSubLayout from './userSubLayout'
import ProductSubLayout from './productSubLayout'

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={UserSubLayout} />
        <Route path={`${match.path}/products`} component={ProductSubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout
// import React, { useState } from "react";
// import { Layout, Menu } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";

// const { Header, Sider, Content } = Layout;

// export default function MainPage(props) {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <Layout style={{ height: "100vh" }}>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div
//           style={{
//             height: "32px",
//             background: "rgba(255, 255, 255, 0.2)",
//             margin: "16px",
//           }}
//         />
//         <Menu theme={"dark"} mode={"inline"} defaultSelectedKeys={["1"]}>
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             nav 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             nav 2
//           </Menu.Item>
//           <Menu.Item key="3" icon={<UploadOutlined />}>
//             nav 3
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout style={{ background: "#d9dbde" }}>
//         <Header style={{ padding: 0, background: "#fff" }}>
//           {React.createElement(
//             collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
//             {
//               style: {
//                 fontSize: "18px",
//                 lineHeight: "64px",
//                 padding: "0 24px",
//                 cursor: "pointer",
//                 transition: "color 0.3s",
//               },
//               onClick: () => setCollapsed(!collapsed),
//             }
//           )}
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//             background: "#fff",
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }