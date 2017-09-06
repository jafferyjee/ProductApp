using Newtonsoft.Json.Serialization;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace ProductApp
{
  public class WebApiApplication : System.Web.HttpApplication
  {
    protected void Application_Start() {
      GlobalConfiguration.Configure(WebApiConfig.Register);

      // Get Global Configuration
      HttpConfiguration config =
          GlobalConfiguration.Configuration;

      // Handle self-referencing in Entity Framework
      config.Formatters.JsonFormatter
        .SerializerSettings.ReferenceLoopHandling =
            Newtonsoft.Json.ReferenceLoopHandling.Ignore;

      // Convert to camelCase
      var jsonFormatter = config.Formatters
        .OfType<JsonMediaTypeFormatter>()
          .FirstOrDefault();

      jsonFormatter.SerializerSettings
        .ContractResolver = new
            CamelCasePropertyNamesContractResolver();
    }
  }
}
