using System;
using System.Linq.Expressions;
using System.Text;
using System.Web.Mvc;

namespace IMCBA_Hiring_Test.Helper
{
    public static class SiteHelper
    {
        private class DivContainer : IDisposable
        {
            private HtmlHelper helper;

            public DivContainer(HtmlHelper helper)
            {
                this.helper = helper;
            }

            public void Dispose()
            {
                this.helper.ViewContext.Writer.Write("</div>");
            }
        }

        public static IDisposable BeginDivContainer<TModel, TValue>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TValue>> expression, object htmlAttributes = null)
        {
            StringBuilder sb = new StringBuilder();
            if (!htmlHelper.ViewData.ModelState.IsValidField(ExpressionHelper.GetExpressionText(expression)))
            {
                sb.Append(" has-error has-feedback ");
            }

            TagBuilder divTag = new TagBuilder("div");


            if (htmlAttributes != null)
            {
                var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);

                if (attributes.ContainsKey("class"))
                {
                    attributes["class"] = sb.ToString() + attributes["class"];
                }
                else
                {
                    attributes.Add("class", sb.ToString());
                }

                divTag.MergeAttributes(attributes);
            }
            else
            {
                divTag.Attributes.Add("class", sb.ToString());
            }


            htmlHelper.ViewContext.Writer.Write(divTag.ToString(TagRenderMode.StartTag));

            return new DivContainer(htmlHelper);
        }

        private class ParagraphContainer : IDisposable
        {
            private HtmlHelper helper;

            public ParagraphContainer(HtmlHelper helper)
            {
                this.helper = helper;
            }

            public void Dispose()
            {
                this.helper.ViewContext.Writer.Write("</p>");
            }
        }

        public static IDisposable BeginParagraph<TModel, TValue>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TValue>> expression, object htmlAttributes = null)
        {
            StringBuilder sb = new StringBuilder();
            if (!htmlHelper.ViewData.ModelState.IsValidField(ExpressionHelper.GetExpressionText(expression)))
            {
                sb.Append(" has-error has-feedback ");
            }

            TagBuilder divTag = new TagBuilder("p");


            if (htmlAttributes != null)
            {
                var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);

                if (attributes.ContainsKey("class"))
                {
                    attributes["class"] = sb.ToString() + attributes["class"];
                }
                else
                {
                    attributes.Add("class", sb.ToString());
                }

                divTag.MergeAttributes(attributes);
            }
            else
            {
                divTag.Attributes.Add("class", sb.ToString());
            }


            htmlHelper.ViewContext.Writer.Write(divTag.ToString(TagRenderMode.StartTag));

            return new ParagraphContainer(htmlHelper);
        }
    }
}