export default function createReportObject(employeesList) {
  const all = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return all;
}
