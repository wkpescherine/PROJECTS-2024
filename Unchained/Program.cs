using System;
using System.Windows.Forms;
using System.Drawing;

//Most of the following code works and does produce the window
//Having to work on converting from the Java coud that works to C#

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new Form();
            Panel main = new Panel();
            Label text = new Label();
            Button button = new Button();

            button.Text = "Enter";
            button.Location = new Point(395, 150);
            button.BackColor = Color.FromArgb(255, 255, 255);
            button.Click += testClick;
            
            text.Text = "Unchained";
            //The location is (Width,hieght)
            text.Location = new Point(400,100);
            text.ForeColor = Color.FromArgb(255, 255, 255);

            main.Width = 100;
            main.Height = 100;
            main.BackColor = Color.FromArgb(255, 0, 0);
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v2.2.1";
            window.BackColor = Color.FromArgb(0, 0, 0);

            window.Controls.Add(text);
            window.Controls.Add(button);
            window.Controls.Add(main);
            Application.Run(window);
        }

        public static void testClick(Object sender, EventArgs e){
            Console.WriteLine("Test");
        }
    }
}