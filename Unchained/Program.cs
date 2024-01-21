using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;

//Most of the following code works and does produce the window
//Having to work on converting from the Java coud that works to C#
//This is now working and continueing to build it up.

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new();
            Panel main = new();
            Panel select = new();
            Panel saved = new();
            Label text = new();
            Label text2 = new();
            Button selectStart = new();
            Button selectExit = new();
            Button savedStart = new();
            Button savedExit = new();

            selectStart.Text = "New Game";
            selectStart.Location = new Point(395, 150);
            selectStart.BackColor = Color.FromArgb(255, 255, 255);
            selectStart.Click += newGame;
            
            selectExit.Text = "Exit Select";
            selectExit.Location = new Point(395, 450);
            selectExit.BackColor = Color.FromArgb(255, 255, 255);
            selectExit.Click += backToMain;

            Button holy = new();
            holy.Text = "Holy";
            holy.Location = new Point(25, 25);
            holy.BackColor = Color.FromArgb(255, 255, 255);
            //holy.Click += new EventHandler(roleSelected);
            //holy.Click += (sender, e) => roleSelected(sender, e) { selectStyle.Text = "Holdy";};
            Button stout = new();
            stout.Text = "Stout";
            stout.Location = new Point(125, 25);
            stout.BackColor = Color.FromArgb(255, 255, 255);
            //stout.Click += (sender, e) => roleSelected(sender, e);
            Button human = new();
            human.Text = "Human";
            human.Location = new Point(25, 125);
            human.BackColor = Color.FromArgb(255, 255, 255);
            Button paladin = new();
            paladin.Text = "Paladin";
            paladin.Location = new Point(25, 225);
            paladin.BackColor = Color.FromArgb(255, 255, 255);
            Label selectStyle = new();
            selectStyle.Text = charSheet.style;
            selectStyle.Location = new Point(25,325);
            selectStyle.ForeColor = Color.FromArgb(255, 255, 255);
            holy.Click += (sender, e) => roleSelected(sender, e);
            select.Width = 800;
            select.Height = 600;
            select.Visible = false;
            select.Controls.Add(holy);
            select.Controls.Add(stout);
            select.Controls.Add(human);
            select.Controls.Add(paladin);
            select.Controls.Add(selectExit);
            select.Controls.Add(selectStyle);
            select.BackColor = Color.FromArgb(0,0,0);

            savedStart.Text = "Saved Game";
            savedStart.Location = new Point(395, 250);
            savedStart.BackColor = Color.FromArgb(255, 255, 255);
            savedStart.Click += savedGame;

            savedExit.Text = "Exit Saved";
            savedExit.Location = new Point(395, 150);
            savedExit.BackColor = Color.FromArgb(255, 255, 255);
            savedExit.Click += backToMain;

            saved.Width = 800;
            saved.Height = 600;
            saved.Visible = false;
            saved.Controls.Add(savedExit);
            saved.BackColor = Color.FromArgb(0,0,0);

            text.Text = "Unchained";
            //The location is (Width,hieght)
            text.Location = new Point(400,100);
            text.ForeColor = Color.FromArgb(255, 255, 255);

            main.Width = 800;
            main.Height = 600;
            main.Visible = true;
            main.Controls.Add(text);
            main.Controls.Add(selectStart);
            main.Controls.Add(savedStart);
            main.BackColor = Color.FromArgb(0, 0, 0);
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v2.5.5";
            //window.BackColor = Color.FromArgb(0, 0, 0);
            //window.Controls.Add(text);
            //window.Controls.Add(button);
            window.Controls.Add(main);
            window.Controls.Add(select);
            window.Controls.Add(saved);
            Application.Run(window);

             void roleSelected(object ? sender, EventArgs e){
                    selectStyle.Text = "Holdy";
            }

            void newGame(Object ? sender, EventArgs e){
                main.Visible = false;
                select.Visible = true;
            }
            
            void backToMain(Object ? sender, EventArgs e){
                main.Visible = true;
                select.Visible = false;
                saved.Visible = false;
            }

            void savedGame(Object ? sender, EventArgs e){
                main.Visible = false;
                saved.Visible = true;
            }
        }
    }
}