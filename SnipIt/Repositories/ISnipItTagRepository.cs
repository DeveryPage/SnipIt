using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ISnipItTagRepository
    {
        void Add(SnipItTag snipItTag);
        void DeleteBySnipItId(int snipItId);
        List<SnipItTag> Get(int snipItId);
    }
}