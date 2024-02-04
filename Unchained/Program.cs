using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows.Media.Imaging;

//Most of the following code works and does produce the window
//Having to work on converting from the Java coud that works to C#
//This is now working and continueing to build it up.

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new();
            Button selectExit = new();
            Button savedExit = new();

            Main main = new Main();
            Panel mainScreen = main.MainPanel();
            SavedGames saved = new SavedGames();
            Panel savedScreen = saved.SavedGamesPanel();
            Selection selection = new Selection();
            Panel selectionScreen = selection.SelectionPanel();
            if(ScreenManager.screen == "Main"){
                mainScreen.Visible = true;
            }
            if (ScreenManager.screen == "Saved"){
                mainScreen.Visible = false;
                savedScreen.Visible = true;
            }
            if (ScreenManager.screen == "Selection"){
                mainScreen.Visible = false;
                savedScreen.Visible = false;
                selectionScreen.Visible = true;
            }
            if (ScreenManager.screen == "Dungeon"){
                mainScreen.Visible = false;
                savedScreen.Visible = false;
                selectionScreen.Visible = false;
                //dungeon.Visible = false;
            }
            
            //selectExit.Click += backToMain;

            Button startGame = new();
            startGame.Text = "Start Game";
            startGame.Location = new Point(450, 525);
            startGame.BackColor = Color.FromArgb(255, 255, 255);
            //startGame.Click += startNewGame;
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v0.2.17";
            window.Controls.Add(mainScreen);
            window.Controls.Add(savedScreen);
            window.Controls.Add(selectionScreen);
            window.Update();
            Application.Run(window);

            
            //void backToMain(Object ? sender, EventArgs e){
                //main.Visible = true;
                //select.Visible = false;
                //savedScreen.Visible = false;
            //}

            //void startNewGame(Object ? sender, EventArgs e){
            //    select.Visible = false;
                //dungeon.Visible = true;
            //    Dungeon dungeon = new Dungeon();
            //    Panel game = dungeon.DungeonPanel();
            //    window.Controls.Add(game);
            //}
        }
    }
}