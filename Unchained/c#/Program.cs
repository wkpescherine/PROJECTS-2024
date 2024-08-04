using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;
using System.Windows.Media.Imaging;

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new();

            Main main = new Main();
            Panel mainScreen = main.MainPanel();
            SavedGames saved = new SavedGames();
            Panel savedScreen = saved.SavedGamesPanel();
            Selection selection = new Selection();
            Panel selectionScreen = selection.SelectionPanel();
            Dungeon dungeon = new Dungeon();
            Panel dungeonScreen = dungeon.DungeonPanel();
            ScreenManager.pan1 = mainScreen;
            ScreenManager.pan2 = savedScreen;
            ScreenManager.pan3 = selectionScreen;
            ScreenManager.pan4 = dungeonScreen;
            ScreenManager.HandleScreenChanges(ScreenManager.pan1, ScreenManager.pan2, ScreenManager.pan3, ScreenManager.pan4);
            
            window.KeyPreview = true;
            window.KeyPress += (Sender, e) => KeyPressHandler(Sender, e);
            //window.Update();

            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v0.2.25";
            window.Controls.Add(mainScreen);
            window.Controls.Add(savedScreen);
            window.Controls.Add(selectionScreen);
            window.Controls.Add(dungeonScreen);
            window.Update();
            Application.Run(window);

            void KeyPressHandler(object sender, KeyPressEventArgs e){
                if (e.KeyChar == 'a'){ dungeonScreen.changeLocation(5,-5); }
                if (e.KeyChar == 'w'){ dungeonScreen.changeLocation(5,5);}
                if (e.KeyChar == 's'){ dungeonScreen.changeLocation(-5,5);}
                if (e.KeyChar == 'd'){ dungeonScreen.changeLocation(-5,-5); }
                Console.WriteLine(sender);
            }
        }
    }
}