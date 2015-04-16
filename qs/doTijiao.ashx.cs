using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace qs
{
    /// <summary>
    /// doTijiao 的摘要说明
    /// </summary>
    public class doTijiao : IHttpHandler
    {
        public static string connStr = ConfigurationManager.ConnectionStrings["connStr"].ConnectionString;
        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string requestMethod = context.Request["checkitem"];
            context.Response.Write("系统未开启问卷，请联系管理员");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}