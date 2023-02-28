import { ThirdTitle } from "../../shared/Titles";
import Wrapper from "../../shared/Wrapper";
import Form from "./Form";
import HorizontalLine from "../../shared/icons/HorizontalLine";

const Contact = () => {
  return (
    <section id="contact" className="w-full my-12 lg:my-16">
      <Wrapper className="flex-col pb-4">
        <ThirdTitle
          text="Contact me"
          className="text-center text-primary dark:text-secondary"
        />
        <Form />
      </Wrapper>

      <HorizontalLine className="left-0 transform rotate-180 md:opacity-50" />
    </section>
  );
};

export default Contact;
