using System;
using System.Windows.Forms;
using System.Drawing;

//Most of the following code works and does produce the window
//Having to work on converting from the Java coud that works to C#

namespace unchained{
    public static class Program{
        public static void Main(String [] args){
            Form window = new Form();
            Label text = new Label();
            Button button = new Button();

            button.Text = "Enter";
            button.Location = new Point(400, 150);
            button.Click += new EventHandler(testClick);
            
            text.Text = "Unchained";
            //The location is (Width,hieght)
            text.Location = new Point(400,100);
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v2.1.3";

            window.Controls.Add(text);
            window.Controls.Add(button);
            Application.Run(window);
        }

        public static void testClick(Object sender, EventArgs e){
            Console.WriteLine("Test");
        }
    }
}