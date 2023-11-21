using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddEndpointsApiExplorer();

            services.AddDbContext<DataContext>(opts =>
            {
                opts.UseSqlServer(config.GetConnectionString("DBCS"), e => e.MigrationsAssembly("Persistence"));
            });

            services.AddCors(opts =>
            {
                opts.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(opts =>
            {
                opts.RegisterServicesFromAssembly(typeof(List).Assembly);
            });
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}