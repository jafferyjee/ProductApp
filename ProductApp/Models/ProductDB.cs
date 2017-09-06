namespace ProductApp.Models
{
  using System;
  using System.Data.Entity;
  using System.ComponentModel.DataAnnotations.Schema;
  using System.Linq;

  public partial class ProductDB : DbContext
  {
    public ProductDB()
        : base("name=ProductDB") {
    }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder) {
      modelBuilder.Entity<Product>()
          .Property(e => e.ProductName)
          .IsUnicode(false);

      modelBuilder.Entity<Product>()
          .Property(e => e.Url)
          .IsUnicode(false);

      modelBuilder.Entity<Product>()
          .Property(e => e.Price)
          .HasPrecision(19, 4);
    }
  }
}
