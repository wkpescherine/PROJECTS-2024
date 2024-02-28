using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows;

namespace unchained{
    public class Dungeon{ 
        public Panel DungeonPanel(){
            Panel gamePanel = new();
            
            Button quitGame = new();
            quitGame.BackColor = Color.FromArgb( 255, 255 , 255);
            quitGame.Width = 200;
            quitGame.Location = new System.Drawing.Point(395, 150);
            quitGame.Text = "Quit Game";
            quitGame.Click += quitGamePlay;

            gamePanel.Width = 800;
            gamePanel.Height = 600;
            gamePanel.BackColor = Color.FromArgb(0, 0, 0);
            gamePanel.Visible = false;
            //(Sender, e) => newGame(Sender,e);
            gamePanel.KeyPress += (Sender, e) =>detectKeyPress(Sender, e);
            gamePanel.Controls.Add(quitGame); 

            void quitGamePlay(Object ? sender, EventArgs e){
                ScreenManager.screen = "Main";
                ScreenManager.HandleScreenChanges(ScreenManager.pan1, ScreenManager.pan2, ScreenManager.pan3, ScreenManager.pan4);
            }

            void detectKeyPress(Object ? sender, KeyPressEventArgs e){
                Console.Write("1");
                if(e.KeyChar == (char)Keys.F){Console.Write("Test");}
            }

            return gamePanel;
        }
    }
}