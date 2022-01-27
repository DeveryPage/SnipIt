using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SnipIt.Models
{
    public class SnipIt
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Caption { get; set; }

        //ask if i need to change this in the data base
        public string Snip { get; set; }

        public int LanguageId { get; set; }

        public int UserProfileId { get; set; }

        public DateTime CreateDateTime { get; set; }
    }
}
