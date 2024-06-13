using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Đề_3
{
    static class DataAccess
    {
        private static string duongdan = @" Data Source=THANG-TIGER-BLU;Initial Catalog=qlsanpham;Integrated Security=True";
        private static SqlConnection taoketnaoi()

        {
            return new SqlConnection(duongdan);
        }
        public static DataTable GetTable(string sql)
        {
            SqlConnection duongong = taoketnaoi();
            duongong.Open();
            SqlDataAdapter mayhut = new SqlDataAdapter(sql, duongong);
            DataTable thungchua = new DataTable();
            mayhut.Fill(thungchua);
            duongong.Close();
            mayhut.Dispose();
            return thungchua;
        }
        public static void AddEditDelete(string sql)
        {
            SqlConnection DuongOng = taoketnaoi();
            DuongOng.Open();
            SqlCommand cmd = new SqlCommand(sql, DuongOng);
            cmd.ExecuteNonQuery();
            DuongOng.Close();
            cmd.Dispose();
        }
    }
}
