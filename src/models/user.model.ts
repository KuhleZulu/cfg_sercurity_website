
export interface User {
  UserId: string;
  Email: string;
  Name: string;
  UserType?: string;
  Surname: string;
  Address?: string;
  Password: string;
  CompanyId: string;
  CompanyName?: string;
  CompanyDp?: string;
  Slug?: string;
  RoleId?: number;
  CreateDate?: string;
  CreateUserId?: string;
  ModifyDate?: string;
  ModifyUserId?: string;
  NewPassword?: string;
  ConfirmPassword?: string;
  StatusId: any;
  UserToken?: any;
  Dp?: any;
  AddressLineHome: string;
  AddressUrlHome: string;
  AddressLineWork: string;
  AddressUrlWork: string;
  SystemRole?: string;
  SecurityToken?: string;
  Viewing?: boolean;
  PhoneNumber: any;
  Company?: any;
  Cv?: any;
  IdentityNumber: string;
  dateofbirth: string;
  gender: string;
  currentlyemployed: string;
  salaryexpected: string;
  Experience: string;
  Certificates: string;
  MaritalStatus: string;
  WillingToRelocate: string;
  HighestQualification: string;
  Selected?: boolean
}

export const initUser = (): User => {
  return {
    UserId: '',
    CompanyId: 'f012a111-0476-11eb-bac2-c2cf57e9c3fe',
    UserType: '',
    Name: '',
    Surname: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    Dp: '',
    CreateDate: '',
    CreateUserId: 'add-by-admin',
    ModifyDate: '',
    ModifyUserId: 'add-by-admin',
    StatusId: '1',
    UserToken: '',
    AddressLineHome: '',
    AddressUrlHome: '',
    AddressLineWork:
      '',
    AddressUrlWork: '',
    Cv: '',
    IdentityNumber: '',
    dateofbirth: '',
    gender: '',
    currentlyemployed: '',
    salaryexpected: '',
    Experience: '',
    Certificates: '',
    MaritalStatus: '',
    WillingToRelocate: '',
    HighestQualification: '',

  };
};
