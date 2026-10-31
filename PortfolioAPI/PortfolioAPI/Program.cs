using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("appsettings.Secrets.json", optional: true, reloadOnChange: false);
builder.Configuration.AddJsonFile("appsettings.Secrets.json", optional: true, reloadOnChange: false);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connStr = builder.Configuration.GetConnectionString("DefaultConnection");
bool useRealDb = !string.IsNullOrWhiteSpace(connStr);

if (useRealDb)
{
    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(connStr));
}
else
{
    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseInMemoryDatabase("FallbackDb"));
}

builder.Services.AddScoped<EmailService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",
                "https://zainabfayyaz-portfolio.vercel.app"
              )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Migrate real DB or seed in-memory DB
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        if (useRealDb)
        {
            db.Database.Migrate();
            logger.LogInformation("DB migration applied successfully.");
        }
        else
        {
            // Seed the in-memory database with default slugs
            db.Database.EnsureCreated();
            if (!db.ProjectViews.Any())
            {
                db.ProjectViews.AddRange(
                    new ProjectView { Id = 1, Slug = "nigehbaan", Views = 0 },
                    new ProjectView { Id = 2, Slug = "resumecraft-pro", Views = 0 },
                    new ProjectView { Id = 3, Slug = "safevision", Views = 0 }
                );
                await db.SaveChangesAsync();
            }
            logger.LogWarning("No SQL connection string found — running with in-memory DB.");
        }
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "Startup DB initialization failed — app will continue.");
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// MonsterASP handles HTTPS at IIS level — removing app-level redirect to fix ERR_CONNECTION_RESET
app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.MapGet("/health", () => Results.Ok(new { status = "ok", db = useRealDb ? "sqlserver" : "inmemory" }));

app.Run();
