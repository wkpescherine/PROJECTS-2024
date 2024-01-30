using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;

namespace unchained{
    public static class Dungeon{ 
        public static void dungeon(){
            Panel gamePanel = new();

            gamePanel.Width = 800;
            gamePanel.Height = 600;
            gamePanel.Visible = false;   
        }
    }
}