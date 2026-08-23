using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Data;
using PortfolioAPI.DTOs;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly EmailService _emailService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(AppDbContext db, EmailService emailService, ILogger<ContactController> logger)
        {
            _db = db;
            _emailService = emailService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContact([FromBody] ContactDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Name) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Message))
            {
                return BadRequest(new { error = "All fields are required." });
            }

            var entry = new ContactMessage
            {
                Name = dto.Name,
                Email = dto.Email,
                Message = dto.Message
            };

            _db.ContactMessages.Add(entry);
            await _db.SaveChangesAsync();

            try
            {
                await _emailService.SendContactNotificationAsync(dto.Name, dto.Email, dto.Message);
            }
            catch (Exception ex)
            {
                
                _logger.LogError(ex, "Failed to send contact email");
            }

            return Ok(new { success = true });
        }
    }
}
