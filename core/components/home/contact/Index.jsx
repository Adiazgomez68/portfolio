import { ThirdTitle } from "../../shared/Titles";
import Wrapper from "../../shared/Wrapper";
import Form from "./Form";
import HorizontalLine from "../../shared/icons/HorizontalLine";

const Contact = () => {
  return (
    <section id="contact" className="w-full my-12">
      <Wrapper className="flex-col pb-4">
        <ThirdTitle text="Contact me" className="text-center text-primary" />
        <Form />
      </Wrapper>

      <HorizontalLine className="left-0 transform rotate-180" />
    </section>
  );
};

export default Contact;