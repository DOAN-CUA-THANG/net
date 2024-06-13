using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace QLSV1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnHienThi_Click(object sender, EventArgs e)
        {
            dataGridView1.DataSource = DataAccess.GetTable("select*from SV");
            dataGridView1.Columns[0].HeaderText = "Mã Sinh Vien";
            dataGridView1.Columns[1].HeaderText = "Họ Tên";
            dataGridView1.Columns[2].HeaderText = "Năm Sinh";
            dataGridView1.Columns[3].HeaderText = "Que quan";
            dataGridView1.Columns[4].HeaderText = "Khoa";
            

        }

        private void btnThem_Click(object sender, EventArgs e)
        {
            string sql = "insert into SV values (N'" +
               txtmasv.Text + "', N'" +
               txthoten.Text + "', N'" +
               txtngaysinh.Text + "', N'" +
               txtquequan.Text + "', N'" +
               cbkhoa.Text + "')";
            DataAccess.AddEditDelete(sql);
            MessageBox.Show("Đã lưu!");
            dataGridView1.DataSource = DataAccess.GetTable("select*from SV");
        }

        private void btnSua_Click(object sender, EventArgs e)
        {
            string sql = "update SV set hoten=N'" +
                txthoten.Text + "', ngaysinh =" +
                txtngaysinh.Text + ", quequan =N' " +
                txtquequan.Text + "', khoa=N'" +
                cbkhoa.Text  + "' where masv='" +
                txtmasv.Text + "'";

            DataAccess.AddEditDelete(sql);

            dataGridView1.DataSource =
              DataAccess.GetTable("select * from SV");

            MessageBox.Show("Đã sửa bản ghi ", "Thông báo",
                MessageBoxButtons.OK, MessageBoxIcon.Information);

        }

        private void dataGridView1_CellEnter(object sender, DataGridViewCellEventArgs e)
        {
            if (dataGridView1.CurrentRow != null)
            {
                txtmasv.Text =
                    dataGridView1.CurrentRow.Cells[0].Value.ToString();
                txthoten.Text =
                    dataGridView1.CurrentRow.Cells[1].Value.ToString();
                txtngaysinh.Text =
                    dataGridView1.CurrentRow.Cells[2].Value.ToString();
                txtquequan.Text =
                    dataGridView1.CurrentRow.Cells[3].Value.ToString();
                cbkhoa.Text =
                    dataGridView1.CurrentRow.Cells[4].Value.ToString();
                

            }

        }

        private void btnXoa_Click(object sender, EventArgs e)
        {
            string sql = "Delete SV where masv = '" +
    txtmasv.Text + "'";
            DataAccess.AddEditDelete(sql);

            dataGridView1.DataSource =
              DataAccess.GetTable("select * from SV");
            MessageBox.Show("Đã xoa bản ghi ", "Thông báo",
               MessageBoxButtons.OK, MessageBoxIcon.Information);
        }

        private void btnThoat_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}

