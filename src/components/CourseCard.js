import React from "react";
import { Button, Card, Select } from "antd";

const Option = Select.Option;

const CourseCard = props => {
  if (!props.visible) {
    return null;
  }

  const handleGPAChange = value => {
    props.updateCourseGPA(props.index, value);
  };

  const handleCreditsChange = value => {
    props.updateCourseCredits(props.index, value);
  };

  return (
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title={`Course ${props.realIndex}`}
      extra={
        <Button
          onClick={() => props.deleteCourse(props.index)}
          type="danger"
          icon="delete"
        />
      }
    >
      <Select
        style={{ width: 100 }}
        placeholder="Grade"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onChange={handleGPAChange}
      >
        <Option value={4.3}>A+</Option>
        <Option value={4.0}>A</Option>
        <Option value={3.7}>A-</Option>
        <Option value={3.3}>B+</Option>
        <Option value={3.0}>B</Option>
        <Option value={2.7}>B-</Option>
        <Option value={2.3}>C+</Option>
        <Option value={2.0}>C</Option>
        <Option value={1.7}>C-</Option>
        <Option value={1.3}>D+</Option>
        <Option value={1.0}>D</Option>
        <Option value={0.7}>D-</Option>
        <Option value={0.0}>F</Option>
      </Select>
      <Select
        style={{ width: 100 }}
        placeholder="Credits"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        className="inputCredits"
        onChange={handleCreditsChange}
      >
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={6}>6</Option>
        <Option value={8}>8</Option>
        <Option value={9}>9</Option>
        <Option value={18}>18</Option>
      </Select>
    </Card>
  );
};

export default CourseCard;
