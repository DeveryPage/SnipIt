using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface ITagRepository
    {
        void Add(Tag tag);
        void Delete(int tagId);
        List<Tag> GetAllTags();
        Tag GetTagById(int id);
        void Update(Tag tag);
    }
}