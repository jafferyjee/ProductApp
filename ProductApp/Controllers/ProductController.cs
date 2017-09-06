using ProductApp.Models;
using System.Linq;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using ProductApp.Models;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System;
using System.Data.Entity;

namespace ProductApp.Controllers
{
  public class ProductController : ApiController
  {
    // GET api/<controller>
    public IHttpActionResult Get() {
      IHttpActionResult ret;
      ProductDB db = new ProductDB();

      if (db.Products.Count() > 0) {
        ret = Ok(db.Products);
      }
      else {
        ret = NotFound();
      }

      return ret;
    }

    [HttpGet]
    public IHttpActionResult Get(int id) {
      IHttpActionResult ret;
      ProductDB db = new ProductDB();
      Product product = new Product();

      product = db.Products.Find(id);
      if (product != null) {
        ret = Ok(product);
      }
      else {
        ret = NotFound();
      }

      return ret;
    }

    [HttpPost]
    public IHttpActionResult Post(Product product) {
      IHttpActionResult ret = null;
      ProductDB db = null;

      try {
        db = new ProductDB();

        // Insert the new entity
        db.Products.Add(product);
        db.SaveChanges();

        ret = Created<Product>(Request.RequestUri
          + product.ProductId.ToString(), product);
      }
      catch (DbEntityValidationException ex) {
        ret = BadRequest(ValidationErrorsToMessages(ex));
      }
      catch (Exception ex) {
        ret = InternalServerError(ex);
      }

      return ret;
    }

    [HttpPut()]
    public IHttpActionResult Put(int id, Product product) {
      IHttpActionResult ret = null;
      ProductDB db = null;

      try {
        db = new ProductDB();

        // Update the entity
        db.Entry(product).State = EntityState.Modified;
        db.SaveChanges();

        ret = Ok(product);
      }
      catch (DbEntityValidationException ex) {
        ret = BadRequest(ValidationErrorsToMessages(ex));
      }
      catch (Exception ex) {
        ret = InternalServerError(ex);
      }

      return ret;
    }

    [HttpDelete()]
    public IHttpActionResult Delete(int id) {
      IHttpActionResult ret = null;
      ProductDB db = null;

      try {
        db = new ProductDB();

        // Get the product
        Product product = db.Products.Find(id);

        // Delete the product
        db.Products.Remove(product);
        db.SaveChanges();

        ret = Ok(product);
      }
      catch (Exception ex) {
        ret = InternalServerError(ex);
      }

      return ret;
    }

    protected ModelStateDictionary ValidationErrorsToMessages(DbEntityValidationException ex) {
      ModelStateDictionary ret = new ModelStateDictionary();

      foreach (DbEntityValidationResult result in ex.EntityValidationErrors) {
        foreach (DbValidationError item in result.ValidationErrors) {
          ret.AddModelError(item.PropertyName, item.ErrorMessage);
        }
      }

      return ret;
    }

  }
}