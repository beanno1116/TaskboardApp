import Button from './components/Button';
import Header from './components/Header';
import InputWrapper from './components/InputWrapper';
import Link from './components/Link';
import Row from './components/Row';
import TextField from './components/TextField';


import styles from './tbForm.module.css';

const TBForm = ({ children }) => {
  return (
    <form className={styles.form}>
      {children}
    </form>
  );
}

TBForm.Row = Row;
TBForm.InputWrapper = InputWrapper;
TBForm.Header = Header;
TBForm.Link = Link;
TBForm.TextField = TextField;
TBForm.Button = Button;

export default TBForm;