using System.Net;
using System.Net.Mail;

namespace PortfolioAPI.Services
{
    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendContactNotificationAsync(string name, string email, string message)
        {
            var smtpSection = _config.GetSection("Smtp");
            var host = smtpSection["Host"];
            var port = int.Parse(smtpSection["Port"] ?? "587");
            var user = smtpSection["User"];
            var pass = smtpSection["Password"];
            var to = smtpSection["ToAddress"];

            using var client = new SmtpClient(host, port)
            {
                Credentials = new NetworkCredential(user, pass),
                EnableSsl = true,
            };

            var mail = new MailMessage
            {
                From = new MailAddress(user!, "Portfolio Contact Form"),
                Subject = $"New message from {name}",
                Body = $"From: {name} ({email})\n\n{message}",
                IsBodyHtml = false,
            };
            mail.To.Add(to!);
            mail.ReplyToList.Add(new MailAddress(email));

            await client.SendMailAsync(mail);
        }
    }
}
