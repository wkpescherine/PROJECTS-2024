using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows;

namespace unchained{
    public class Main{ 
        public Panel MainPanel(){
            Panel mainPanel = new();
            
            Label titleText = new();
            titleText.Text = "Unchained";
            //The location is (Width,hieght)
            titleText.Location = new System.Drawing.Point(400,100);
            titleText.ForeColor = Color.FromArgb(255, 255, 255);

            Button savedStart = new();
            savedStart.Text = "Saved Game";
            savedStart.Location = new System.Drawing.Point(395, 250);
            savedStart.BackColor = Color.FromArgb(255, 255, 255);
            savedStart.Click += savedGame;

            mainPanel.Width = 800;
            mainPanel.Height = 600;
            mainPanel.Visible = false;
            mainPanel.Controls.Add(titleText);
            mainPanel.Controls.Add(savedStart);
            //main.Controls.Add(selectNew);
            //main.Controls.Add(savedStart);
            mainPanel.BackColor = Color.FromArgb(0, 0, 0);

            void savedGame(Object ? sender, EventArgs e){
                ScreenManager.screen = "Saved";
            }

            return mainPanel;
        }
    }
}