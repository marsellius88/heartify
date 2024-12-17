import { useState } from "react";
import womanPicture from "../assets/woman.png";
import Testimonials from "../components/Landing/Testimonials";
import { Divider, Button, Typography } from "antd";
import Footer from "../components/Landing/Footer";
import Login from "../components/Login";

const { Title } = Typography;

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "calc(100vh - 64px)",
          objectFit: "cover",
        }}
      >
        <img
          src={womanPicture}
          alt="Landing"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            userSelect: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Title
            style={{ color: "#fff", fontSize: "80px", userSelect: "none" }}
          >
            Heartify
          </Title>
          <Button type="primary" size="large" onClick={showModal}>
            Create account
          </Button>
        </div>
      </div>
      <div style={{ margin: "25px 100px 0 100px" }}>
        <Testimonials />
        <Divider style={{ marginBottom: "25px" }} />
        <Footer />
      </div>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
