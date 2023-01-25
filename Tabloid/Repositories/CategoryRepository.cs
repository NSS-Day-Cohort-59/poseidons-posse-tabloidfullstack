using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.ComponentModel.Design;
using Microsoft.Data.SqlClient;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration config) : base(config) { }

        public List<Category> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT id, Name FROM Category ORDER BY Name";
                    var reader = cmd.ExecuteReader();

                    var categories = new List<Category>();

                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                    }
                    reader.Close();

                    return categories;
                }
            }
        }

        public void AddCategory(Category category) 
        {
            using (SqlConnection conn = Connection) 
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                    INSERT INTO Category (Name)
                    OUTPUT INSERTED.Id
                    Values(@name)";

                    cmd.Parameters.AddWithValue("name", category.Name);

                    int id = (int)cmd.ExecuteScalar();

                    category.Id = id;
                }
            }
        }
    }
}
