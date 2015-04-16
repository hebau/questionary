using ShandianLibrary.TOOLS;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;

namespace qs
{
    /// <summary>
    /// doGetData 的摘要说明
    /// </summary>
    public class doGetData : IHttpHandler
    {
        private string sql = null;
        private DataTable qsTable = null;
        private DataTable dtQuestion = null;
        public void ProcessRequest(HttpContext context)
        {
            
            context.Response.ContentType = "text/plain";
          

            context.Response.Write(writeQS());
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

        public string writeQS()
        {

            string result = null;
            SQL.ConnStr = ConfigurationManager.ConnectionStrings["connStr"].ConnectionString;

            #region 标题
            sql = "select name,comment from tb_survey";
            DataRow dr = SQL.ExecuteDataRow(sql);
            result = "<div class='hero-unit'><center><h3>" + dr[0].ToString() + "</h3></center><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dr[1].ToString() + "</p></div>";

            sql = "select id,name,type from tb_question where surveyId=1 and usable=1 order by position ";
            #endregion

            dtQuestion = SQL.ExecuteDataTable(sql);
            foreach (DataRow tdr in dtQuestion.Rows)
            {
                result += " <div id='q1' class='bs-docs-example'><div id='qq1' class='alert alert-info'>";
                result += "<strong>" + tdr[1].ToString() + "</strong><br />";
                sql = "select item from tb_quesItem where quesId= " + dr[0] + "";

                result += "<label class='radio inline'><input type='radio' name='q1' id='q1_1' value='A'> A：知道</label>";
                result += " <label class='radio inline'><input type='radio' name='q1' id='q1_2' value='B'>B：不知道</label></div></div>";
            }

            return result;
        }
    }
}
