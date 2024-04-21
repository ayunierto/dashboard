import { Form, Link } from "react-router-dom";
import { Button, Checkbox, Input } from "../../ui";
import { BsGoogle } from "react-icons/bs";
import { useLoadTheme } from "../../components/dashboard/hooks";

export const LoginPage = () => {
  useLoadTheme();

  return (
    <div className="flex justify-center min-h-screen mt-16">
      <div className="p-5 w-full sm:w-96">
        <h3 className="text-3xl text-center mb-8 text-gray-600 dark:text-gray-300">
          Sign In
        </h3>

        <Form className="flex flex-col gap-4">
          <Input label="Username or Email" type="text" />
          <Input label="Password" type="password" />

          <Checkbox />

          <Link to={"/"}>
            <Button className="w-full" variant="solid" color="primary">
              Login
            </Button>
          </Link>

          <div className="flex justify-between items-center gap-4">
            <hr className="border-gray-300 dark:border-gray-600 w-full" />
            <span className="text-gray-400 dark:text-gray-600 dark:font-light">
              {" "}
              Or
            </span>
            <hr className="border-gray-300 dark:border-gray-600 w-full" />
          </div>

          <Button
            className="w-full text-blue-600"
            variant="bordered"
            color="primary"
          >
            <BsGoogle />
            <span>Google</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};
