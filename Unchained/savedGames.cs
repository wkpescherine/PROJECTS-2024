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

            Button savedExit = new();

            //Label savedText = new();
            //savedText.Text = "Unchained" + " " + ScreenManager.screen;
            //The location is (Width,hieght)
            savedText.Location = new System.Drawing.Point(400,100);
            savedText.ForeColor = Color.FromArgb(255, 255, 255);

            savedExit.Text = "Exit Saved";
            savedExit.Location = new Point(395, 150);
            savedExit.BackColor = Color.FromArgb(255, 255, 255);
            savedExit.Click += backToMain;

            saved.Width = 800;
            saved.Height = 600;
            saved.Visible = false;
            saved.Controls.Add(savedExit);
            saved.BackColor = Color.FromArgb(0,0,0);

            mainPanel.Width = 800;
            mainPanel.Height = 600;
            mainPanel.Visible = false;
            mainPanel.Controls.Add(titleText);
            mainPanel.Controls.Add(savedStart);
            mainPanel.Controls.Add(selectNew);
            mainPanel.BackColor = Color.FromArgb(0, 0, 0);

            void backToMain(Object ? sender, EventArgs e){
                //main.Visible = true;
                select.Visible = false;
                saved.Visible = false;
            }

            //void newGame(Object ? sender, EventArgs e){
            //    ScreenManager.screen = "New";
            //}

            return mainPanel;
        }
    }
}