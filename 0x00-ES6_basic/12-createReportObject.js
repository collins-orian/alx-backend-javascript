export default function createReportObject(employeesList) {
  const all = {
    allEmployees: employeesList,
    getNumberOfDepartments(emp) {
      return Object.keys(this.allEmployees).length;
    },
  };

  return all;
}
