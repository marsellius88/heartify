import { Typography, Breadcrumb, Divider } from "antd";
const { Paragraph, Text } = Typography;

export default function Footer() {
  return (
    <div>
      <Typography>
        <Paragraph>
          Single people, listen up: If you’re looking for love, want to start
          dating, or just keep it casual, you need to be on Tinder. With over 55
          billion matches made, it’s the place to be to meet your next best
          match. Let’s be real, the dating landscape looks very different today,
          as most people are meeting online. With Tinder, the world’s most
          popular free dating app, you have millions of other single people at
          your fingertips and they’re all ready to meet someone like you.
          Whether you’re straight or in the LGBTQIA community, Tinder’s here to
          bring you all the sparks.
        </Paragraph>
        <Paragraph>
          There really is something for everyone on Tinder. Want to get into a
          relationship? You got it. Trying to find some new friends? Say no
          more. New kid on campus and looking to make the most of your college
          experience? Tinder U’s got you covered. Tinder isn’t your average
          dating site — it’s the most diverse dating app, where adults of all
          backgrounds and experiences are invited to make connections, memories,
          and everything in between.
        </Paragraph>
      </Typography>
      <Divider style={{ marginBottom: "25px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Breadcrumb
          items={[
            {
              title: "FAQ",
              href: "/",
            },
            {
              title: "Safety Tips",
              href: "/",
            },
            {
              title: "Terms",
              href: "/",
            },
            {
              title: "Coookie Policy",
              href: "/",
            },
            {
              title: "Privacy Settings",
              href: "/",
            },
          ]}
        />
        <Text style={{ color: "#555" }}>
          © 2025 Heartify LLC, All Rights Reserved.
        </Text>
      </div>
    </div>
  );
}
