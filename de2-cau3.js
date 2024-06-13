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
    public partial class Bai3 : Form
    {
        private DataTable dt;
        private int k;
        private void HienThi(int k)
        {
            txtMaCT.Text = dt.Rows[k][0].ToString();
            txtHoTen.Text = dt.Rows[k][1].ToString();
            txtNgaySinh.Text = dt.Rows[k][2].ToString();
            txtQueQuan.Text = dt.Rows[k][3].ToString();
        }
        public Bai3()
        {
            InitializeComponent();
        }

        private void Bai3_Load(object sender, EventArgs e)
        {
            dt = DataAccess.GetTable("select * from tbCauThu");
            k = dt.Rows.Count - 1;
            HienThi(k);
        }

        private void btnFirst_Click(object sender, EventArgs e)
        {
            if(dt.Rows.Count > 0)
            {
                k = 0;
                HienThi(k);
            }
            
        }

        private void btnEnd_Click(object sender, EventArgs e)
        {
            k = dt.Rows.Count - 1;
            if(k>=0)
            HienThi(k);
        }

        private void btnBack_Click(object sender, EventArgs e)
        {
            if (k > 0)
            {
                k = k - 1;
                HienThi(k);
            }
        }

        private void btnNext_Click(object sender, EventArgs e)
        {
            if (k < dt.Rows.Count - 1)
            {
                k = k + 1;
                HienThi(k);
            }
        }

        private void btnThem_Click(object sender, EventArgs e)
        {
            Them_cau_thu f = new Them_cau_thu  ();

            f.Show();

        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            dt = DataAccess.GetTable("select * from tbCauThu");
            k = dt.Rows.Count - 1;
        }

        private void btnThoat_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
