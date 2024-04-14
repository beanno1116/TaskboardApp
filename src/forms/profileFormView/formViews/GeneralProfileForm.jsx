import React from 'react';

import styles from '../profileFormView.module.css';
import TextField from '../../../Components/TextField/TextField';
import FormViewLayout from '../components/FormViewLayout';
import GeneralForm from '../forms/GeneralForm';
import { useAuth } from '../../../hooks/useAuth';
import { useGetCurrentUser } from '../../../api/api';

const GeneralProfileForm = ({initialState}) => {
  




  return (

    <FormViewLayout>

      <FormViewLayout.Heading text={"General"} />

      <GeneralForm />
      
    </FormViewLayout>
    
  );
}

export default GeneralProfileForm;