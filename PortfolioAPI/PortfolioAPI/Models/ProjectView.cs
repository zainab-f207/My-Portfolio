namespace PortfolioAPI.Models
{
    public class ProjectView
    {
        public int Id { get; set; }
        public string Slug { get; set; } = string.Empty;
        public int Views { get; set; } = 0;
    }
}
