export type BioFormFields = {
  fullname: string;
  email: string;
  nationality: {};
  birthday: string;
  birthmonth: string;
  birthyear: string;
  gender: string;
};

export type AddressFormFields = {
  country: {};
  postcode: string;
  phonenumber: string;
  city: string;
  address: string;
};

export type DocumentFormFields = {
  documenttype: string;
  documents: unknown[];
  files: unknown[];
  legalreason: string;
};

export type PaymentFormFields = {
  password: string;
  paymentnow: boolean;
  paymentdata?: {
    status: 'success' | 'error' | '';
    paymentmethod: string;
    meta: unknown;
  };
};
