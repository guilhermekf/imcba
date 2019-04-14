using System.Web;
using System.Web.Optimization;

namespace IMCBA_Hiring_Test
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate.js",
                        "~/Scripts/validator.js",
                        "~/Scripts/select2Helper.js"));


            bundles.Add(new ScriptBundle("~/bundles/contactUs").Include(
                        "~/Scripts/contactUs/index.js",
                        "~/Scripts/contactUs/jquery.smartWizard.min.js",
                        "~/Scripts/contactUs/select2.js"));

            bundles.Add(new ScriptBundle("~/bundles/contactUsReact").Include(
                        "~/Scripts/build/build.bundle.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/contactUs").Include(
                      "~/Content/smart_wizard.min.css",
                      "~/Content/select2.css",
                      "~/Content/select2-bootstrap.css"));
        }
    }
}
