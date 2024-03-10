using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows;

namespace unchained{
    public class Dungeon{ 
        static int vertical = 50;
        static int horizontal = 200;
        public Panel DungeonPanel(){
            Panel gamePanel = new();
            
            Button quitGame = new();
            quitGame.BackColor = Color.FromArgb( 255, 255 , 255);
            quitGame.Width = 200;
            quitGame.Location = new System.Drawing.Point(horizontal,  vertical);
            quitGame.Text = "Quit Game";

            gamePanel.Width = 800;
            gamePanel.Height = 600;
            gamePanel.BackColor = Color.FromArgb(0, 0, 0);
            gamePanel.Visible = false;
            //gamePanel.KeyPress += (Sender, e) =>detectKeyPress(Sender, e);
            gamePanel.Controls.Add(quitGame);
            //gamePanel.Focus();
            //gamePanel.KeyDown += (Sender, e) =>detectKeyPress(Sender, e); 
            //(gamePanel as Control).KeyPress += new KeyPressEventArgs(detectKeyPress);

            void quitGamePlay(Object ? sender, EventArgs e){
                ScreenManager.screen = "Main";
                ScreenManager.HandleScreenChanges(ScreenManager.pan1, ScreenManager.pan2, ScreenManager.pan3, ScreenManager.pan4);
            }

            void changeLocation(){}

            return gamePanel;
        }

        internal void movement(int vert, int hor)
        {
            vertical += vert;
            horizontal += hor;
            Console.Write(vertical);
            Console.Write(horizontal);
        }
    }
}