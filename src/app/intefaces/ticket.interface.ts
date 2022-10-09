export type ID = string;

export interface ITicket {
  id?: ID;
  created?: Date;
  updated?: Date;
  department: Department;
  title: string;
  status: TicketStatus;
  attachment?: File;
}

export enum Department {
  salesDepartment = 'Sales department',
  financialDepartment = 'Financial department',
  technicalDepartment = 'Technical department',
  securityDepartment = 'Security department',
  withdrawalDepartment = 'Withdrawal department',
  accountVerificationDepartment = 'Account verification department',
  complianceRiskDepartment = 'Compliance/risk department',
  projectVerificationDepartment = 'Project verification department',
}

export enum TicketStatus {
  new = 'New',
  edited = 'Edited',
}