namespace EmployeeService
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Employee")]
    public partial class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int employee_id { get; set; }

        public int? months { get; set; }

        [StringLength(50)]
        public string name { get; set; }

        public int? salary { get; set; }

        [StringLength(50)]
        public string gender { get; set; }
    }
}
