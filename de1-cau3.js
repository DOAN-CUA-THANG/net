using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace De_1
{
    public partial class Form3 : Form
    {
        public Form3()
        {
            InitializeComponent();
        }

        private void Form3_Load(object sender, EventArgs e)
        {
            dataGridView1.DataSource = DataAccess.GetTable("select*from qlteamleader");
            dataGridView1.Columns[0].HeaderText = "Mã NV";
            dataGridView1.Columns[1].HeaderText = "Họ Tên";
            dataGridView1.Columns[2].HeaderText = "Năm Sinh";
            dataGridView1.Columns[3].HeaderText = "Lương";
            dataGridView1.Columns[4].HeaderText = "Tiền TK";
            dataGridView1.Columns[5].HeaderText = "Lương TN";
        }

        private void btnThem_Click(object sender, EventArgs e)
        {
            string sql = "insert into qlteamleader values(N'" +
                txtMa.Text + "', N'" +
                txtHoTen.Text + "', " +
                txtNamSinh.Text + ", " +
                txtLuong.Text + ", " +
                txtTienTK.Text + ", " +
                txtLuongTN.Text + ")";
            DataAccess.AddEditDelete(sql);
            dataGridView1.DataSource = DataAccess.GetTable("select*from qlteamleader");
        }

        private void btnSua_Click(object sender, EventArgs e)
        {
            string sql = "update qlteamleader set Hoten=N'" +
                txtHoTen.Text + "', NamSinh =" +
                txtNamSinh.Text + ", Luong = " +
                txtLuong.Text + ", TienTK=" +
                txtTienTK.Text + ", LuongTN=" +
                txtLuongTN.Text + "  where ID='" +
                txtMa.Text + "'";

            DataAccess.AddEditDelete(sql);

            dataGridView1.DataSource =
              DataAccess.GetTable("select * from qlteamleader");
        }
        private void dataGridView1_CellEnter(object sender, DataGridViewCellEventArgs e)
        {
            if (dataGridView1.CurrentRow != null)
            {
                txtMa.Text =
                    dataGridView1.CurrentRow.Cells[0].Value.ToString();
                txtHoTen.Text =
                    dataGridView1.CurrentRow.Cells[1].Value.ToString();
                txtNamSinh.Text =
                    dataGridView1.CurrentRow.Cells[2].Value.ToString();
                txtLuong.Text =
                    dataGridView1.CurrentRow.Cells[3].Value.ToString();
                txtTienTK.Text =
                    dataGridView1.CurrentRow.Cells[4].Value.ToString();
                txtLuongTN.Text =
                    dataGridView1.CurrentRow.Cells[5].Value.ToString();

            }
        }
            private void btnThoat_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnXoa_Click(object sender, EventArgs e)
        {
            string sql = "Delete qlteamleader where ID = '" +
               txtMa.Text + "'";
            DataAccess.AddEditDelete(sql);

            dataGridView1.DataSource =
              DataAccess.GetTable("select * from qlteamleader");
        }
    }
}
