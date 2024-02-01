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
            quitGame.Click += quitGamePlay;

            gamePanel.Width = 800;
            gamePanel.Height = 600;
            gamePanel.Controls.Add(quitGame); 
            return gamePanel;
            
            void quitGamePlay(Object ? sender, EventArgs e){
                ScreenManager.screen = "Main";
            }

        }
    }
}