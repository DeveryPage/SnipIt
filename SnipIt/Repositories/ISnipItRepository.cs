using CodeSnipIt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Repositories
{
    public interface ISnipItRepository
    {
        List<SnipIt> GetAllSnipIts();
    }
}
