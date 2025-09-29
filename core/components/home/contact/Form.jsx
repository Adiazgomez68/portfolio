import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../../../utils/fetch";
import { toast } from "react-toastify";
import Spinner from "../../shared/Spinner";
import Comment from "../../shared/icons/Comment";
import Send from "../../shared/icons/Send";

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
      className="flex flex-col justify-center w-full my-8 border dark:bg-gray-50/5 px-5 pt-6 pb-8 rounded-xl dark:border-gray-50/10"
    >
      <div className="flex items-center mb-8 gap-2 text-primary">
        <Comment />
        <h3 className="text-xl font-semibold text-secondary">Envíame un mensaje</h3>
      </div>

      <fieldset className="flex flex-col justify-center w-full max-w-screen-sm space-y-5">
        <div className="space-y-4 md:space-x-3 md:space-y-0 md:items-center md:flex">
          <Input type="text" name="name" placeholder="Nombres" {...register("name")} />
          <Input type="email" name="mail" placeholder="Correo electrónico" {...register("mail")} />
        </div>
        <Input type="text" name="subject" placeholder="Asunto" {...register("subject")} />
        <textarea
          className="border bg-[#F9F9F9] dark:border-gray-50/10 rounded-md p-3 placeholder:text-primary focus:outline-0 dark:bg-[#12181d] dark:placeholder:text-secondary/50 placeholder:text-sm"
          placeholder="Escribe tu mensaje"
          {...register("message")}
          type="text"
          name="message"
          required
          cols=""
          rows="5"
        ></textarea>

        <Button
          className="relative w-full p-2 dark:text-black duration-300 dark:bg-primary rounded-md group md:right-0"
          type="submit"
        >
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex items-center gap-x-2 font-medium">
              <span>Enviar</span>
              <Send className="duration-300 group-hover:translate-x-1" />
            </div>
          )}
        </Button>
      </fieldset>
    </form>
  );
};

export default Form;
