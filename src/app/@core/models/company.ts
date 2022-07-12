export class Company {
  id: number;
  name: string;
  email: string;
  hotline: string;
  date_incoporation: Date;
  tax_code: string;
  tax_date: Date;
  tax_place: string;
  head_office: string;
  number_staff: number;
  link_web: string;
  description: string;
  avatar: string;
  backdrop_img: string;
  is_delete: boolean;

  constructor(
  id: number,
  name: string,
  email: string,
  hotline: string,
  date_incoporation: Date,
  tax_code: string,
  tax_date: Date,
  tax_place: string,
  head_office: string,
  number_staff: number,
  link_web: string,
  description: string,
  avatar: string,
  backdrop_img: string,
  is_delete: boolean,) {
    this.id  = id;
    this.name = name;
    this.email = email;
    this.hotline = hotline;
    this.date_incoporation = date_incoporation;
    this.tax_code = tax_code;
    this.tax_date = tax_date;
    this.tax_place = tax_place;
    this.head_office = head_office;
    this.number_staff = number_staff;
    this.link_web = link_web;
    this.description = description;
    this.avatar = avatar;
    this.backdrop_img = backdrop_img;
    this.is_delete = is_delete;
  }
}
