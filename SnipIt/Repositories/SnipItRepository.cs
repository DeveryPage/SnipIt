using CodeSnipIt.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Utils;

namespace CodeSnipIt.Repositories
{
    public class SnipItRepository : BaseRepository, ISnipItRepository
    {
        public SnipItRepository(IConfiguration configuration) : base(configuration) { }

        public List<SnipIt> GetAllSnipIts()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select s.Id, s.Title, s.Caption, s.Snip, s.LanguageId,
	                                           s.UserProfileId, s.CreateDateTime, 
	                                           up.DisplayName, l.Name
                                        From SnipIt s
                                        Join UserProfile up on s.UserProfileId = up.Id 
                                        Join Language l on s.LanguageId = l.Id
                                        Order By CreateDateTime desc";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var snipits = new List<SnipIt>();
                        while (reader.Read())
                        {
                            snipits.Add(new SnipIt()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Title = DbUtils.GetString(reader, "Title"),
                                Caption = DbUtils.GetString(reader, "Caption"),
                                Snip = DbUtils.GetString(reader, "Snip"),
                                LanguageId = DbUtils.GetInt(reader, "Id"),
                                UserProfileId = DbUtils.GetInt(reader, "Id"),
                                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),

                                Language = new Language
                                {
                                    Id = DbUtils.GetInt(reader, "Id"),
                                    Name = DbUtils.GetString(reader, "Name")
                                },

                                Userprofile = new UserProfile
                                {
                                    DisplayName = DbUtils.GetString(reader, "DisplayName")
                                }
                            });
                        }
                        return snipits;
                    }
                }
            }
        }

    }
}
