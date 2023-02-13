import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { ArrowRight } from "../../shared/icons/Arrows";

const Form = () => {
  return (
    <form className="w-full px-5 my-8">
      <fieldset className="flex flex-col justify-center w-full space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Mail" />
        <Input placeholder="Subject" />
        <textarea
          className="border border-[#BBBBBB] rounded-md p-3 placeholder:text-primary focus:outline-0"
          placeholder="Message"
          required
          cols=""
          rows="5"
        ></textarea>

        <Button
          className="p-2 bg-[#1BEB7C] w-full rounded-md text-white relative"
          title="Send message"
          type="submit"
        >
          <ArrowRight />
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
