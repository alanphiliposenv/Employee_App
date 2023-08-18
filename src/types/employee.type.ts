export type Employee = {
  name: string;
  id?: number;
  username?: string;
  password?: string;
  joiningDate: string;
  role: string;
  status: string;
  departmentId?: number;
  department?: string;
  experience: number;
  address: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};
