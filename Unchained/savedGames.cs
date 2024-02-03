using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows.Media.Imaging;

namespace unchained{
    public class SavedGames{ 
        public Panel SavedGamesPanel(){
            Panel savedPanel = new();

            Label savedText = new();
            savedText.Text = "Unchained Saved Games";
            //The location is (Width,hieght)
            savedText.Location = new System.Drawing.Point(400,100);
            savedText.ForeColor = Color.FromArgb(255, 255, 255);

            Button savedExit = new();
            savedExit.Text = "Exit Saved";
            savedExit.Location = new Point(395, 150);
            savedExit.BackColor = Color.FromArgb(255, 255, 255);
            savedExit.Click += backToMain;

            savedPanel.Width = 800;
            savedPanel.Height = 600;
            savedPanel.Visible = false;
            savedPanel.Controls.Add(savedText);
            savedPanel.Controls.Add(savedExit);
            savedPanel.BackColor = Color.FromArgb(0,0,0);

            void backToMain(Object ? sender, EventArgs e){
                ScreenManager.screen = "Saved";
            }

            return savedPanel;
        }
    }
}