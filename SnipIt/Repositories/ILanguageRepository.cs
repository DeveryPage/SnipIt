using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ILanguageRepository
    {
        void Add(Language language);
        void Delete(int id);
        List<Language> GetAllLanguages();
        void UpdateLanguage(Language language);
    }
}