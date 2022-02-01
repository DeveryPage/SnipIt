using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ISnipItRepository
    {
        List<SnipIt> GetAllSnipIts();

        SnipIt GetSnipItById(int id);

        void Add(SnipIt snipit);

        void Delete(int snipitId);

        void Update(SnipIt snipit);
    }
}