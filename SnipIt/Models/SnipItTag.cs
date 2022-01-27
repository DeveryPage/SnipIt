using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Models
{
    public class SnipItTag
    {
        public int Id { get; set; }

        public int SnipItId { get; set; }

        public int TagId { get; set; }

        public string TagName { get; set; }

    }
}
