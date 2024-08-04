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
            int vertical = 50;
            int horizontal = 200;
            int v1, v2;
            Panel gamePanel = new();
            
            Button quitGame = new();
            quitGame.BackColor = Color.FromArgb( 255, 255 , 255);
            quitGame.Width = 200;
            quitGame.Location = new System.Drawing.Point(horizontal,  vertical);
            quitGame.Text = "Quit Game";
            gamePanel.changeLocation(v1, v2);

            gamePanel.Width = 800;
            gamePanel.Height = 600;
            gamePanel.BackColor = Color.FromArgb(0, 0, 0);
            gamePanel.Visible = false;
            //quitGame += (v1, v2) => changeLocation(v1, v2);
            //gamePanel.KeyPress += (Sender, e) =>detectKeyPress(Sender, e);
            gamePanel.Controls.Add(quitGame);

            void quitGamePlay(Object ? sender, EventArgs e){
                ScreenManager.screen = "Main";
                ScreenManager.HandleScreenChanges(ScreenManager.pan1, ScreenManager.pan2, ScreenManager.pan3, ScreenManager.pan4);
            }

            void changeLocation(int vert, int hor)
            {
                vertical += vert;
                horizontal += hor;
                quitGame.Location = new System.Drawing.Point(horizontal,  vertical);
                Console.Write(vertical);
                Console.Write(horizontal);
            }

            return gamePanel;
        }
    }
}