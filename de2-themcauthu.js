using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Đề_2
{
    public partial class Them_cau_thu : Form
    {
        public Them_cau_thu()
        {
            InitializeComponent();
        }

        private void btnLuu_Click(object sender, EventArgs e)
        {
            string sql = "insert into tbCauThu values (N'" +
               txtMaCT.Text + "', N'" +
               txtHoTen.Text + "', N'" +
               txtNgaySinh.Text + "', N'" +
               cbQueQuan.Text + "')";
            DataAccess.AddEditDelete(sql);
            MessageBox.Show("Đã lưu!");
        }

        private void btnNhapLai_Click(object sender, EventArgs e)
        {

            txtMaCT.Text = "";
            txtHoTen.Text = "";
            txtNgaySinh.Text = "";
        }

        private void button8_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
    
}
