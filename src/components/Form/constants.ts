export interface FormType {
  title: string;
  price: string;
  description: string;
}

export const INIT_FORM_FIELDS: FormType = {
  title: "",
  description: "",
  price: "",
};

export const FORM_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
  PRICE: "price",
};
