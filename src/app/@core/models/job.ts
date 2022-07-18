import {User} from './user';

export class Job {
  id: number;
  name: string;
  jobPositionId: number;
  numberExperience: string;
  workingFormId: User;
  addressWork: string;
  academicLevelId: User;
  rankId: User;
  qtyPerson: string;

  dueDate: Date;
  skills: string;
  startRecruitmentDate?: Date;
  // workingForm: WorkingForm;
  jobRequirement: string;
  description: string;
  interest: string;
  // jobRequirement: string;
  salaryMax: number;
  salaryMin: number;
  contactId: User;
  createId: User;
  createDate: number;
  updateId: User;
  updateDate: Date;
  statusId: User;
  views: number;
  isDelete: boolean;

  constructor(
    id: number,
  name: string,
  jobPositionId: number,
  numberExperience: string,
  workingFormId: User,
  addressWork: string,
  academicLevelId: User,
  rankId: User,
  qtyPerson: string,
  startRecruitmentDate: string,
  dueDate: Date,
  skills: string,
  description: string,
  interest: string,
  jobRequirement: string,
  salaryMax: number,
  salaryMin: number,
  contactId: User,
  createId: User,
  createDate: number,
  updateId: User,
  updateDate: Date,
  statusId: User,
  views: number,
  isDelete: boolean) {
    this.id = id;
    this.name = name;
    this.jobPositionId = jobPositionId;
    this.numberExperience = numberExperience;
    this.workingFormId = workingFormId;
    this.addressWork = addressWork;
    this.academicLevelId = academicLevelId;
    this.rankId = rankId;
    this.qtyPerson = qtyPerson;
    // this.startRecruitmentDate = startRecruitmentDate;
    this.dueDate = dueDate;
    this.skills = skills;
    this.description = description;
    this.interest = interest;
    this.jobRequirement = jobRequirement;
    this.salaryMax = salaryMax;
    this.salaryMin = salaryMin;
    this.contactId = contactId;
    this.createId = createId;
    this.createDate = createDate;
    this.updateId = updateId;
    this.updateDate = updateDate;
    this.statusId = statusId;
    this.views = views;
    this.isDelete = isDelete;
  }
}
