import { ThirdTitle } from "../shared/Titles";
import Wrapper from "../shared/Wrapper";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="w-full my-12">
      <Wrapper className="flex-col ">
        <ThirdTitle text="Contact me" className="text-center text-primary" />
        <Form />
      </Wrapper>
    </section>
  );
};

export default Contact;
