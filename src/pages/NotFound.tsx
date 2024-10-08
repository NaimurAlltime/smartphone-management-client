import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button className="bg-blue-500" type="primary">
            Back To Dashboard
          </Button>
        </Link>
      }
    />
  );
};

export default NotFound;
