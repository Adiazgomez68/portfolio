import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <section id="footer" className="w-full h-full">
      <Wrapper className="flex-col py-10 text-primary dark:text-secondary">
        <p className="w-full text-center font-inconsolada text-primary text-sm">
          Diseñado y construido por Andrés Díaz
        </p>
      </Wrapper>
    </section>
  );
};

export default Footer;
