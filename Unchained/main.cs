using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows.Media.Imaging;

namespace unchained{
    public class Main{ 
        public Panel MainPanel(){
            Panel mainPanel = new();

            Label titleText = new();
            titleText.Text = "Unchained" + " " + ScreenManager.screen;
            //The location is (Width,hieght)
            titleText.Location = new System.Drawing.Point(400,100);
            titleText.ForeColor = Color.FromArgb(255, 255, 255);

            Button savedStart = new();
            savedStart.Text = "Saved Game";
            savedStart.Location = new System.Drawing.Point(395, 250);
            savedStart.BackColor = Color.FromArgb(255, 255, 255);
            savedStart.Click += savedGame;

            Button selectNew = new();
            selectNew.Text = "New Game";
            selectNew.Location = new System.Drawing.Point(395, 150);
            selectNew.BackColor = Color.FromArgb(255, 255, 255);
            //selectNew.Click += newGame;
            //selectNew.Click += (Sender, e) => newGame(Sender,e);

            mainPanel.Width = 800;
            mainPanel.Height = 600;
            mainPanel.Visible = false;
            mainPanel.Controls.Add(titleText);
            mainPanel.Controls.Add(savedStart);
            mainPanel.Controls.Add(selectNew);
            mainPanel.BackColor = Color.FromArgb(0, 0, 0);

            void savedGame(Object ? sender, EventArgs e){
                ScreenManager.screen = "Saved";
                Console.Write(ScreenManager.screen);
            }

            //void newGame(Object ? sender, EventArgs e){
            //    ScreenManager.screen = "New";
            //}

            return mainPanel;
        }
    }
}