using CodeSnipIt.Models;
using CodeSnipIt.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeSnipIt.Repositories
{
    public class SnipItTagRepository : BaseRepository, ISnipItTagRepository
    {
        public SnipItTagRepository(IConfiguration configuration) : base(configuration) { }

        public List<SnipItTag> Get(int snipItId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Select st.*, t.name
                                        From SnipItTag st
                                        Join Tag t on st.TagId = t.id
                                        Where SnipItId = @snipItTagId;";
                    DbUtils.AddParameter(cmd, "@snipItTagId", snipItId);

                    List<SnipItTag> snipItTags = new List<SnipItTag>();

                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            snipItTags.Add(new SnipItTag
                            {
                                SnipItId = snipItId,
                                TagId = DbUtils.GetInt(reader, "TagId"),
                                TagName = DbUtils.GetString(reader, "Name")
                            });
                        }
                    }
                    return snipItTags;
                }
            }
        }

        public void Add(SnipItTag snipItTag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO SnipItTag (SnipItId, TagId)
                                        OUTPUT INSERTED.Id
                                        VALUES (@snipItId, @tagId)";

                    DbUtils.AddParameter(cmd, "@snipItId", snipItTag.SnipItId);
                    DbUtils.AddParameter(cmd, "@tagId", snipItTag.TagId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteBySnipItId(int snipItId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"Delete From SnipItTag
                                        Where SnipItId = @snipItId";
                    DbUtils.AddParameter(cmd, "@snipItId", snipItId);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
