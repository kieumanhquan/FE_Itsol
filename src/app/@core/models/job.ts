
import {JobPosition} from './jobPosition';
import {AcademicLevel} from './academicLevel';
import {Rank} from './rank';
import {User} from './User';
import {StatusJob} from './statusJob';
import {WorkingForm} from './working_form';


export interface Job{
  id: number;
  name: string;
  jobPosition: JobPosition;
  numberExperience: number;
  addressWork: string;
  academicLevel: AcademicLevel;
  rank: Rank;
  qtyPerson: number;
  createDate?: Date;
  dueDate: Date;
  updateDate: Date;
  update: User;
  skills: string;
  startRecruitmentDate?: Date;
  workingForm: WorkingForm;
  jobRequirement: string;
  description: string;
  salaryMax: number;
  salaryMin: number;
  contact: User;
  status: StatusJob;
  views: number;
  create: User;
  delete?: boolean;
  interest: string;
}
