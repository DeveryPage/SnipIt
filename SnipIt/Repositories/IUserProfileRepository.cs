using CodeSnipIt.Models;
using System.Collections.Generic;

namespace CodeSnipIt.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        List<UserProfile> GetAllUsers();
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetUserProfileById(int id);
    }
}