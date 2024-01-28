import Button from './components/Button';
import Header from './components/Header';
import InputWrapper from './components/InputWrapper';
import Link from './components/Link';
import Row from './components/Row';
import TextField from './components/TextField';
import Textarea from './components/Textarea';


import styles from './tbForm.module.css';

const TBForm = ({ children,...props }) => {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
}

TBForm.Row = Row;
TBForm.InputWrapper = InputWrapper;
TBForm.Header = Header;
TBForm.Link = Link;
TBForm.TextField = TextField;
TBForm.Textarea = Textarea;
TBForm.Button = Button;

export default TBForm;