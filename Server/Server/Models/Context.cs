using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Cliente> Cliente { get; set; }
    }
}
