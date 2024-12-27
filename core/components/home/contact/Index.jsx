import Wrapper from "../../shared/Wrapper";
import Button from "../../shared/Button";
import { EMAIL } from "../../../utils/constants";

const Contact = () => {
  return (
    <section id="contact" className="w-full">
      <Wrapper className="flex-col mb-6 px-5 lg:my-32 items-center justify-center">
        <div className="flex flex-col space-y-4 text-primary text-center dark:text-primary pb-12">
          <h1 className="tracking-wide text-2xl">Contacta conmigo</h1>
          <div className="flex flex-col text-center font-light space-y-1 leading-7 text-base">
            <span>¿Te gustaría ponerte en contacto conmigo?</span>
            <span>Déjame tu mensaje y te responderé lo antes posible.</span>
            <span className="font-medium text-lg">
              ¡Mi bandeja de entrada siempre está disponible!
            </span>
          </div>
        </div>
        <Button
          isRouter
          link={`mailto:${EMAIL}`}
          className="flex items-center justify-center border rounded-md font-normal
              border-secondary text-secondary bg-transparent py-[0.6rem] hover:bg-secondary/10
              duration-200 font-inconsolada"
        >
          Escríbeme
        </Button>
      </Wrapper>
    </section>
  );
};

export default Contact;
