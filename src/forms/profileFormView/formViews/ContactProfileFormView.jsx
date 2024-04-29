import FormViewLayout from '../components/FormViewLayout';
import ContactForm from '../forms/ContactForm';
import GeneralForm from '../forms/GeneralForm';

const ContactProfileFormView = ({initialState}) => {
  




  return (
    <FormViewLayout>

      <FormViewLayout.Heading text={"Contact Info"} />

      <ContactForm />      
      
    </FormViewLayout>    
  );
}

export default ContactProfileFormView;