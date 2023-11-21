using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration
{
    public class ActivityConfiguration : IEntityTypeConfiguration<Activity>
    {
        public void Configure(EntityTypeBuilder<Activity> builder)
        {
            builder.HasKey(e => e.Id);
            builder.Property(e => e.Title).HasColumnType("nvarchar(250)");
            builder.Property(e => e.Date).HasColumnType("datetime");
            builder.Property(e => e.Description).HasColumnType("text");
            builder.Property(e => e.Category).HasColumnType("nvarchar(100)");
            builder.Property(e => e.City).HasColumnType("nvarchar(100)");
            builder.Property(e => e.Venue).HasColumnType("nvarchar(100)");

            builder.ToTable("Activities");
        }
    }
}