import { Modal, Form, Input, Button, Typography, Checkbox } from "antd";
import logo from "/logo.svg";

const { Text, Link } = Typography;

export default function Login({ isModalOpen, setIsModalOpen }) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Form Values: ", values);
    // Add login logic here
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            width: "40px",
          }}
          src={logo}
        />
      </div>

      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Get Started</h2>

      <Text style={{ display: "block", marginBottom: 16, textAlign: "center" }}>
        By tapping Log In or Continue, you agree to our
        <Link href="#" target="_blank">
          {" "}
          Terms
        </Link>
        . Learn how we process your data in our
        <Link href="#" target="_blank">
          {" "}
          Privacy Policy
        </Link>
        , and
        <Link href="#" target="_blank">
          {" "}
          Cookie Policy
        </Link>
        .
      </Text>
      <Form
        name="login_form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="emailOrUsername"
          label="Email or Username"
          rules={[
            { required: true, message: "Please input your email or username!" },
          ]}
        >
          <Input placeholder="Enter your email or username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" block>
            Log In
          </Button>
        </Form.Item>

        <Text style={{ display: "block", marginTop: 16, textAlign: "center" }}>
          <Link href="#" target="_blank">
            Trouble Logging In?
          </Link>
        </Text>
      </Form>
    </Modal>
  );
}
