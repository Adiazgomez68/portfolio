import Wrapper from "../../shared/Wrapper";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="w-full z-[50] dark:bg-[#12181d]">
      <Wrapper className="flex-col mb-14 px-5 mt-20 md:mt-16 lg:mt-12 lg:mb-24 items-center justify-center">
        <h2 className="text-3xl font-semibold text-center mb-5 glow-text">¡Conversemos!</h2>

        <div className="grid grid-cols-2 gap-6">
          <Form />
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
