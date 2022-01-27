using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using CodeSnipIt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Utils;

namespace CodeSnipIt.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FirebaseUserId, up.DisplayName, up.IsActive,  
                               up.Email, up.CreateDateTime
                          FROM UserProfile up
                         WHERE FirebaseUserId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            DisplayName = DbUtils.GetString(reader, "DisplayName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            IsActive = DbUtils.GetBool(reader, "IsActive")
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }


        public UserProfile GetUserProfileById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        select Id, DisplayName,  Email, FirebaseUserId, CreateDateTime
                        from UserProfile
                        Where Id = @Id
                    ";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        UserProfile userProfile = null;

                        if (reader.Read())
                        {
                            userProfile = new UserProfile
                            {
                                Id = id,
                                DisplayName = DbUtils.GetString(reader, "DisplayName"),
                                Email = DbUtils.GetString(reader, "Email"),
                                FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),

                            };

                        }
                        return userProfile;


                    }
                }
            }
        }

        public List<UserProfile> GetAllUsers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    Select up.Id, up.DisplayName
                    From UserProfile up
                    
              ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        var users = new List<UserProfile>();
                        while (reader.Read())
                        {
                            users.Add(new UserProfile()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                DisplayName = DbUtils.GetString(reader, "DisplayName")
                            });
                        }

                        return users;
                    }
                }
            }
        }


        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, DisplayName, 
                                                                 Email, CreateDateTime,)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @DisplayName, 
                                                @Email, @CreateDateTime)";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@DisplayName", userProfile.DisplayName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", userProfile.CreateDateTime);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


    }
}
