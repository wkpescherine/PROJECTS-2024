using System;
using System.Windows.Forms;
using System.Drawing;

//Most of the following code works and does produce the window
//Having to work on converting from the Java coud that works to C#
//This is now working and continueing to build it up.

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new Form();
            Panel main = new Panel();
            Panel select = new Panel();
            Label text = new Label();
            Label text2 = new Label();
            Button button = new Button();
            Button button2 = new Button();

            button.Text = "New Game";
            button.Location = new Point(395, 150);
            button.BackColor = Color.FromArgb(255, 255, 255);
            button.Click += newGame;
            
            button2.Text = "Back to Main";
            button2.Location = new Point(395, 150);
            button2.BackColor = Color.FromArgb(255, 255, 255);
            button2.Click += backToMain;
            
            text.Text = "Unchained";
            //The location is (Width,hieght)
            text.Location = new Point(400,100);
            text.ForeColor = Color.FromArgb(255, 255, 255);

            select.Width = 800;
            select.Height = 600;
            select.Visible = false;
            select.Controls.Add(button2);
            select.BackColor = Color.FromArgb(0,0,0);

            main.Width = 800;
            main.Height = 600;
            main.Visible = true;
            main.Controls.Add(text);
            main.Controls.Add(button);
            main.BackColor = Color.FromArgb(0, 0, 0);
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v2.3.2";
            //window.BackColor = Color.FromArgb(0, 0, 0);

            //window.Controls.Add(text);
            //window.Controls.Add(button);
            window.Controls.Add(main);
            window.Controls.Add(select);
            Application.Run(window);

            void newGame(Object sender, EventArgs e){
                main.Visible = false;
                select.Visible = true;
            }
            
            void backToMain(object sender, EventArgs e){
                main.Visible = true;
                select.Visible = false;
            }
        }
    }
}