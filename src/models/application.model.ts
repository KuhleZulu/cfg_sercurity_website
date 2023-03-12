import { CareersModel } from './careers.model';
import { User } from './user.model';

export interface Application {
  ApplicatonId: number;
  UserId: string;
  CareerId: number;
  Created_date?: string;
  Status: string;
  CreateById: string;
  Career?: CareersModel;
  User?: User;
  Selected?: boolean;
}

export const initApplication = (): Application => {
  return {
    ApplicatonId: 0,
    UserId: '',
    CareerId: 0,
    Status: 'Applied',
    CreateById: '',
  };
};
