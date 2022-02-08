using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ISnipItTagRepository
    {
        void Add(SnipItTag snipItTag);
        void Delete(SnipItTag snipItTag);
        List<SnipItTag> Get(int snipItId);
    }
}