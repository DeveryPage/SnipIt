using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Models
{
    public class SnipIt
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Caption { get; set; }

        public string Snip { get; set; }

        public int LanguageId { get; set; }

        public int UserProfileId { get; set; }

        public Language Language { get; set; }

        public UserProfile Userprofile { get; set; }

        public DateTime CreateDateTime { get; set; }
    }
}
