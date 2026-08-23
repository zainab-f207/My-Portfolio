using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;

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
            var project = await _db.ProjectViews.FirstOrDefaultAsync(p => p.Slug == slug);
            if (project == null) return NotFound();
            return Ok(new { slug = project.Slug, views = project.Views });
        }

        [HttpPost("{slug}/view")]
        public async Task<IActionResult> IncrementView(string slug)
        {
            var project = await _db.ProjectViews.FirstOrDefaultAsync(p => p.Slug == slug);

            if (project == null)
            {
               
                project = new Models.ProjectView { Slug = slug, Views = 0 };
                _db.ProjectViews.Add(project);
            }

            project.Views++;
            await _db.SaveChangesAsync();

            return Ok(new { slug = project.Slug, views = project.Views });
        }
    }
}
