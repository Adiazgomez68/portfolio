import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { ArrowRight } from "../../shared/icons/Arrows";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../../../utils/fetch";
import { toast } from "react-toastify";
import Spinner from "../../shared/Spinner";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      mail: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await sendContactForm(data);

    if (response.status == 200) {
      setLoading(false);
      reset();
      toast.success("Message sent successfully");
    } else {
      setLoading(false);
      reset();
      toast.error("Failed to send message");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center w-full px-5 my-8"
    >
      <fieldset className="flex flex-col justify-center w-full max-w-screen-sm space-y-4">
        <div className="space-y-4 md:space-x-3 md:space-y-0 md:items-center md:flex">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            {...register("name")}
          />
          <Input
            type="email"
            name="mail"
            placeholder="Mail"
            {...register("mail")}
          />
        </div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject")}
        />
        <textarea
          className="border bg-[#F9F9F9] border-[#BBBBBB] rounded-md p-3 placeholder:text-primary focus:outline-0 dark:bg-[#12181d] dark:placeholder:text-secondary"
          placeholder="Message"
          {...register("message")}
          type="text"
          name="message"
          required
          cols=""
          rows="5"
        ></textarea>

        <Button
          className="relative w-full p-2 text-white duration-300 bg-green-600 rounded-md hover:bg-green-500 group sm:w-52 md:right-0"
          title={loading ? <Spinner /> : "Send message"}
          type="submit"
          classLink="w-full flex justify-end"
        >
          {!loading && (
            <ArrowRight className="duration-300 group-hover:translate-x-3" />
          )}
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
