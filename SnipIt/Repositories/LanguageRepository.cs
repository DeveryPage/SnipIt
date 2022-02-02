using CodeSnipIt.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeSnipIt.Utils;

namespace CodeSnipIt.Repositories
{
    public class LanguageRepository : BaseRepository, ILanguageRepository
    {
        public LanguageRepository(IConfiguration configuration) : base(configuration) { }

        public List<Language> GetAllLanguages()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select Id, Name
                                        From Language";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var language = new List<Language>();
                        while (reader.Read())
                        {
                            language.Add(new Language()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name")
                            });
                        }
                        return language;
                    }
                }
            }
        }

        public void Add(Language language)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Insert into Language (Name)
                                        Output Inserted.Id
                                        Values (@Name)";

                    cmd.Parameters.AddWithValue("@Name", language.Name);

                    language.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void UpdateLanguage(Language language)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Language
                           SET Name = @Name
                         WHERE Id = @Id";

                    cmd.Parameters.AddWithValue("@Name", language.Name);
                    cmd.Parameters.AddWithValue("@Id", language.Id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Language WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
