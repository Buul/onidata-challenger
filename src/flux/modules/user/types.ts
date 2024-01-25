type AccessSectorEmployeeSet = {
  id: string;
  access_sector: string;
  access_level: string;
  employee: string;
};

type EmployeeUser = {
  id: string;
  first_name: string;
  last_name: string;
  identification_document: string;
  identification_number: string;
  is_active: false;
  created_by: string;
  created_at: string;
  updated_at: string;
  user: string;
  photo: string;
  email?: string;
  phone?: string;
  qr_code: string;
  accesssectoremployee_set: AccessSectorEmployeeSet[];
};

export type User = {
  id: string;
  email: string;
  is_active: true;
  is_staff: true;
  employee_user: EmployeeUser;
};

export interface UserResponse {
  data: User;
}
