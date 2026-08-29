using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public ProjectsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetViews(string slug)
        {
            try
            {
                var project = await _db.ProjectViews.FirstOrDefaultAsync(p => p.Slug == slug);
                if (project == null) return NotFound();
                return Ok(new { slug = project.Slug, views = project.Views });
            }
            catch
            {
                return Ok(new { slug, views = 0 });
            }
        }

        [HttpPost("{slug}/view")]
        public async Task<IActionResult> IncrementView(string slug)
        {
            try
            {
                var project = await _db.ProjectViews.FirstOrDefaultAsync(p => p.Slug == slug);

                if (project == null)
                {
                    project = new ProjectView { Slug = slug, Views = 0 };
                    _db.ProjectViews.Add(project);
                }

                project.Views++;
                await _db.SaveChangesAsync();

                return Ok(new { slug = project.Slug, views = project.Views });
            }
            catch
            {
                return Ok(new { slug, views = 0 });
            }
        }
    }
}
