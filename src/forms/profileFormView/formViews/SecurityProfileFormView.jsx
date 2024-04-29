import FormViewLayout from '../components/FormViewLayout';
import ContactForm from '../forms/ContactForm';
import GeneralForm from '../forms/GeneralForm';
import SecurityForm from '../forms/SecurityForm';

const SecurityProfileFormView = ({initialState}) => {
  




  return (
    <FormViewLayout>

      <FormViewLayout.Heading text={"Security"} />

      <SecurityForm />

    </FormViewLayout>    
  );
}

export default SecurityProfileFormView;