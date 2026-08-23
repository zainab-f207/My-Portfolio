using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<ProjectView> ProjectViews { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ProjectView>().HasIndex(p => p.Slug).IsUnique();
            builder.Entity<ProjectView>().HasData(
                new ProjectView { Id = 1, Slug = "nigehbaan", Views = 0 },
                new ProjectView { Id = 2, Slug = "resumecraft-pro", Views = 0 },
                new ProjectView { Id = 3, Slug = "safevision", Views = 0 }
            );
        }
    }
}
