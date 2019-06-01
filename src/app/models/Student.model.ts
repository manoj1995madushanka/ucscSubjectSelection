import { Sub } from './Subjects.model';

export interface Student {
  id?: string;
  name: string;
  email?: string;
  index: string;
  regNo: string;
  subjects: Sub[];
}
