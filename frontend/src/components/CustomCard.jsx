import { Card } from "antd";

export default function CustomCard({ title, content }) {
  return (
    <Card
      title={title}
      style={{
        minHeight: "250px",
        boxShadow:
          "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p>{content}</p>
    </Card>
  );
}
