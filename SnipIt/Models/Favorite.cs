using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Models
{
    public class Favorite
    {
        public int Id { get; set; }

        public int SnipItId { get; set; }

        public int UserProfileId { get; set; }
    }
}
