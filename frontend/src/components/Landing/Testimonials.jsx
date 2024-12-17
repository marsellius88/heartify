import { Card, Col, Row } from "antd";
import CustomCard from "../CustomCard";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah & Adrian",
    testimonial:
      "At first, we were just swiping for fun, but who knew we'd find the perfect match? We met in such a simple yet exciting way. Now we're planning our wedding. Thank you so much!",
  },
  {
    id: 2,
    name: "Rani",
    testimonial:
      "As someone with a busy schedule, it’s hard to meet new people. This app helped me find great connections and someone who truly understands me. Swipe right, start talking, and it just clicked!",
  },
  {
    id: 3,
    name: "Dimas",
    testimonial:
      "This app is different from the others. The interface is user-friendly, and the matches I got were of better quality. I finally found someone who makes my heart feel at ease. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <div style={{ marginBottom: "25px" }}>
      <Row gutter={16}>
        {testimonialsData.map((item) => (
          <Col key={item.id} span={8}>
            <CustomCard title={item.name} content={item.testimonial} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
