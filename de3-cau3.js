using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace Đề_3
{
    public partial class Cau3 : Form
    {
        string constr = @" Data Source=THANG-TIGER-BLU;Initial Catalog=qlsanpham;Integrated Security=True";
        public Cau3()
        {
            InitializeComponent();
        }

        private void HienThi()
        {
            SqlConnection con = new SqlConnection(constr);
            con.Open();
            SqlDataAdapter ad = new SqlDataAdapter("select * from tbSanPham", con);
            DataTable tb = new DataTable();
            ad.Fill(tb);
            dataGridView1.DataSource = tb;
            con.Close();
        }

        private void Cau3_Load(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(constr);
            con.Open();
            SqlDataAdapter ad = new SqlDataAdapter("select * from tbSanPham", con);
            DataTable tb = new DataTable();
            ad.Fill(tb);
            dataGridView1.DataSource = tb;
            con.Close();
        }

        private void btnThem_Click(object sender, EventArgs e)
        {
            int tt = int.Parse(txtDonGia.Text) *
              int.Parse(txtSoLuong.Text);
            string sql = "insert into tbSanPham values(" +
                txtMa.Text + ", N'" +
                txtTen.Text + "', N'" +
                cbLoaisp.Text + "', '" +
                dtNgaysx.Value.Date.ToString("yyyyMMdd") + "', " +
                txtDonGia.Text + ", " +
                txtSoLuong.Text + ", " + tt + ")";

            MessageBox.Show(sql);

            SqlConnection con = new SqlConnection(constr);
            con.Open();
            SqlCommand cmd = new SqlCommand(sql, con);
            cmd.ExecuteNonQuery();
            con.Close();

            HienThi();
        }

        private void btnSua_Click(object sender, EventArgs e)
        {

        }
    }
}
    

