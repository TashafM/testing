import { Form, InputGroup } from "react-bootstrap";
import "./RadioButton.scss";
function RadioButton({
  label,
  name,
  option1,
  option2,
  selectedOption,
  handleOptionChange,
}) {
  //   const [selectedOption, setSelectedOption] = useState('');

  //   const handleOptionChange = (e) => {
  //     setSelectedOption(e.target.value);
  //   };

  return (
    <Form className="radio-div">
      <div className="label">{label}</div>
      <Form.Group className="division">
        <InputGroup>
          <InputGroup.Radio
            name={name}
            value={option1}
            checked={selectedOption === option1}
            onChange={handleOptionChange}
          />
          <Form.Label>{option1}</Form.Label>
        </InputGroup>

        <InputGroup>
          <InputGroup.Radio
            name={name}
            value={option2}
            checked={selectedOption === option2}
            onChange={handleOptionChange}
          />
          <Form.Label>{option2}</Form.Label>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default RadioButton;
