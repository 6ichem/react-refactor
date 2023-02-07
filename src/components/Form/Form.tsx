import { FC, useState, FormEvent } from "react";
import Button from "../Button";
import { FormType, FORM_FIELDS, INIT_FORM_FIELDS } from "./constants";
import styles from "./Form.module.css";

interface Props {
  onSubmit: (payload: FormType) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  // Adding type for state below is unnecessary since TypeScript binds the type to whatever you set your initial state to
  // In a real world case its recommended to make a "useForm" hook that imitates this behaviour, handles errors, validation and everything in between
  const [formFields, setFormFields] = useState<any>(INIT_FORM_FIELDS);

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    // // In a real world case it's better to use Lodash isEmpty method to check for empty strings instead of manual checks
    // // We trim the string to get the correct length otherwise it would count spaces as characters
    if (formFields[FORM_FIELDS.TITLE].trim().length == 0)
      alert("Your product needs a title");
    if (formFields[FORM_FIELDS.DESCRIPTION].trim().length == 0)
      alert("Your product needs some content");

    onSubmit(formFields);

    // This is always going to be better than resetting the form via JS
    setFormFields(INIT_FORM_FIELDS);
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <span className={styles.label}>Product title: *</span>

      <input
        placeholder="Title..."
        className={styles.input}
        value={formFields[FORM_FIELDS.TITLE]}
        onChange={(e) =>
          setFormFields((prev: FormType) => ({
            ...prev,
            [FORM_FIELDS.TITLE]: e.target.value,
          }))
        }
      />

      <span className={styles.label}>Product details: *</span>

      <input
        placeholder="Price..."
        className={styles.input}
        value={formFields[FORM_FIELDS.PRICE]}
        onChange={(e) =>
          setFormFields((prev: FormType) => ({
            ...prev,
            [FORM_FIELDS.PRICE]: e.target.value,
          }))
        }
      />

      <textarea
        placeholder="Start typing product description here..."
        className={styles.textarea}
        value={formFields[FORM_FIELDS.DESCRIPTION]}
        onChange={(e) =>
          setFormFields((prev: FormType) => ({
            ...prev,
            [FORM_FIELDS.DESCRIPTION]: e.target.value,
          }))
        }
      />

      <Button type="submit" onClick={handleSubmit}>
        Add a product
      </Button>
    </form>
  );
};

export default Form;
