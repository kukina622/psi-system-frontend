export interface IcustomerInfo {
  customer_id: number;
  customer_name: string;
  tax_ID?: string;
  contact_person?: string;
  phone?: string;
  fax_number?: string;
  customer_email?: string;
  customer_address?: string;
}

export interface IaddCustomerInfo {
  customer_name: string;
  tax_ID?: string;
  contact_person?: string;
  phone?: string;
  fax_number?: string;
  customer_email?: string;
  customer_address?: string;
}
