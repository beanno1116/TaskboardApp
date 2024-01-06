

// Import UI Components
import ButtonIcon from './components/ButtonIcon';
import ButtonLabel from './components/ButtonLabel';



import styles from './weLabelButton.module.css';

const LabelButton = ({ onClick, children }) => {
  return (
    <button data-btype={"option"} type={"button"} className={styles.label_button} onClick={onClick}>
      {children}
    </button>
  )
}

WELabelButton.Icon = ButtonIcon;
WELabelButton.Label = ButtonLabel;




function WELabelButton({ onClick, children, label }) {
  return (
    <LabelButton onClick={onClick}>
      {!children &&
        <>
          <ButtonIcon />
          <ButtonLabel>{label}</ButtonLabel>
        </>
      }
      {children}
    </LabelButton>
  );
}

export default WELabelButton;