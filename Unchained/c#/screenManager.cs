using System.Windows.Navigation;

namespace unchained{
    public static class ScreenManager{
        public static string screen = "Main";
        public static Panel pan1 = new();
        public static Panel pan2 = new();
        public static Panel pan3 = new();
        public static Panel pan4 = new();

        public static void HandleScreenChanges(Panel pan1, Panel pan2, Panel pan3, Panel pan4){
            if(screen == "Main"){
                pan1.Visible = true;
                pan2.Visible = false;
                pan3.Visible = false;
                pan4.Visible = false;
            }
            if (screen == "Saved"){
                pan1.Visible = false;
                pan2.Visible = true;
                pan3.Visible = false;
                pan4.Visible = false;
            }
            if(screen == "New"){
                pan1.Visible = false;
                pan2.Visible = false;
                pan3.Visible = true;
                pan4.Visible = false;
            }
            if(screen == "Dungeon"){
                pan1.Visible = false;
                pan2.Visible = false;
                pan3.Visible = false;
                pan4.Visible = true;
            }
        }
    }
}