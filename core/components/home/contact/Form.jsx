import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { ArrowRight } from "../../shared/icons/Arrows";
import { useState } from "react";
import { sendContactForm } from "../../../utils/fetch";
import { toast } from "react-toastify";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ ...form, isLoading: true });
    const response = await sendContactForm(form);

    if (response.status == 200) {
      toast.success("Message sent successfully");
    } else {
      toast.error("Failed to send message");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-full px-5 my-8"
    >
      <fieldset className="flex flex-col justify-center w-full max-w-screen-sm space-y-4">
        <div className="space-y-4 md:space-x-3 md:space-y-0 md:items-center md:flex">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="mail"
            placeholder="Mail"
            value={form.mail}
            onChange={handleChange}
          />
        </div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          className="border bg-[#F9F9F9] border-[#BBBBBB] rounded-md p-3 placeholder:text-primary focus:outline-0"
          placeholder="Message"
          onChange={handleChange}
          value={form.message}
          type="text"
          name="message"
          required
          cols=""
          rows="5"
        ></textarea>

        <Button
          className="hover:bg-green-500 group duration-300 md:w-52 md:right-0 p-2 bg-[#1BEB7C] w-full rounded-md text-white relative"
          title="Send message"
          type="submit"
          classLink="w-full flex justify-end"
        >
          <ArrowRight className="duration-300 group-hover:translate-x-3" />
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
