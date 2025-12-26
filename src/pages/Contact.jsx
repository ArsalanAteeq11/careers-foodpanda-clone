import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/HomePage/Hero";

const Contact = () => {
  return (
    <>
      <Hero
        type="image"
        src="/images/contact.jpg"
        heading={{
          text: <>Get in touch</>,
          className: "text-white font-bold mb-4 ml-10 text-4xl md:text-7xl",
        }}
        desc={{
          text: " Explore how panda ads can help boost your brand and connect you with millions of customers.",
          className: "text-white mb-20 ml-10 max-w-xl text-xl",
        }}
      />

      <ContactForm />
    </>
  );
};

export default Contact;
