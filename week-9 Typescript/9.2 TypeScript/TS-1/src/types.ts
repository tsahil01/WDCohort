type Employee = {
    name: string;
    startDate: Date;
  };
  
type Manager = {
    name: string;
    department: string;
    };

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
    };
  