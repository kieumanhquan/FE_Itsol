export class Job {
  id: number;
  name: string;
  job_position_id: number;
  number_experience: number;
  working_form_id: number;
  address_work: string;
  academic_level_id: number;
  rank_id: number;
  qty_person: number;
  start_recruitment_date: string;
  due_date: string;
  skills: string;
  description: string;
  interest: string;
  job_requirement: string;
  salary_max: number;
  salary_min: number;
  contact_id: number;
  create_id: number;
  create_date: Date;
  update_id: number;
  update_date: Date;
  status_id: number;
  views: number;
  is_delete: number;

  constructor(id: number,
  name: string,
  job_position_id: number,
  number_experience: number,
  working_form_id: number,
  address_work: string,
  academic_level_id: number,
  rank_id: number,
  qty_person: number,
  start_recruitment_date: string,
  due_date: string,
  skills: string,
  description: string,
  interest: string,
  job_requirement: string,
  salary_max: number,
  salary_min: number,
  contact_id: number,
  create_id: number,
  create_date: Date,
  update_id: number,
  update_date: Date,
  status_id: number,
  views: number,
  is_delete: number) {
    this.id = id;
    this.name = name;
    this.job_position_id = job_position_id;
    this.number_experience = number_experience;
    this.working_form_id = working_form_id;
    this.address_work = address_work;
    this.academic_level_id = academic_level_id;
    this.rank_id = rank_id;
    this.qty_person = qty_person;
    this.start_recruitment_date = start_recruitment_date;
    this.due_date = due_date;
    this.skills = skills;
    this.description = description;
    this.interest = interest;
    this.job_requirement = job_requirement;
    this.salary_max = salary_max;
    this.salary_min = salary_min;
    this.contact_id = contact_id;
    this.create_id = create_id;
    this.create_date = create_date;
    this.update_id = update_id;
    this.update_date = update_date;
    this.status_id = status_id;
    this.views = views;
    this.is_delete = is_delete;
  }
}
