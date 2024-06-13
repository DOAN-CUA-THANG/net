using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Đề_3
{
    public partial class Cau2 : Form
    {
        public Cau2()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void Cau2_Load(object sender, EventArgs e)
        {

        }
        bool NguyenTo(long n)
        {
            bool nt = true;
            for (int i = 2; i * i <= n; i++)
                if (n % i == 0)
                {
                    nt = false;
                    break;
                }
            return nt;
        }

        private void btnSoNT_Click(object sender, EventArgs e)
        {
            bool nt = true;
            long n = long.Parse(txtN.Text);
            for (int i = 2; i*i <= n; i++) 
                if(n%i == 0)
                {
                    nt=false;
                    break;
                }    
             if(nt) {
                txtSoTN.Text = n + " là số nguyên tố";

                }
            else 
            
                txtSoTN.Text = n + " là hợp số";         
        }

        private void btnSoNTN_Click(object sender, EventArgs e)
        {
            txtSoNTN.Text = "";
            long n = long.Parse(txtN.Text);
            for (int i = 2; i <= n; i++)
                if (NguyenTo(i))
                    txtSoNTN.Text = txtSoNTN.Text + i + " , ";
                
        }

        private void btnSotn_Sang_Click(object sender, EventArgs e)
        {
            txtSoNTN.Text = "";
            long n = long.Parse(txtN.Text);
            bool[] Sang = new bool[10000];
            for (int i = 0; i < 10000; i++)
                Sang[i] = true;
            Sang[0] = false;
            Sang[1] = false;

            for (int i = 2; i * i <= n; i++)
                if (Sang[i])
                    for (int j = i * i; j <= n; j = j + i)
                        Sang[j] = false;

            for (int i = 0; i <= n; i++)
                if (Sang[i])
                    txtSoNTN.Text = txtSoNTN.Text + i + " , ";
        }
    }
}
    

