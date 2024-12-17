import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
import Login from "./Login";

const { Header } = Layout;

const menuItems = [
  {
    key: "1",
    label: "Products",
    children: [
      {
        key: "1-1",
        label: <Link to="/products/premium-features">Premium Features</Link>,
      },
      {
        key: "1-2",
        label: (
          <Link to="/products/subscription-tiers">Subscription Tiers</Link>
        ),
      },
    ],
  },
  {
    key: "2",
    label: <Link to="/learn">Learn</Link>,
  },
  {
    key: "3",
    label: "Safety",
    children: [
      {
        key: "3-1",
        label: (
          <Link to="/safety/community-guidelines">Community Guidelines</Link>
        ),
      },
      {
        key: "3-2",
        label: <Link to="/safety/tips">Safety Tips</Link>,
      },
    ],
  },
  {
    key: "4",
    label: <Link to="/support">Support</Link>,
  },
  {
    key: "5",
    label: <Link to="/download">Download</Link>,
  },
];

export default function Navbar() {
  const { token } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          background: "#fff",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: token.colorPrimary,
            fontSize: "20px",
            fontWeight: "bold",
            marginRight: "auto",
          }}
        >
          Heartify
        </a>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
          theme="light"
        />
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
      </Header>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </Layout>
  );
}
