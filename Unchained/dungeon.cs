using System;
using System.Windows.Forms;
using System.Drawing;
using System.Security.Cryptography.X509Certificates;
using System.CodeDom;
using System.Drawing.Text;

public class Dungeon{ 
    public Panel dungeon(){
        Panel gamePanel = new();
        Label test = new();
        test.Text = "Test";

        gamePanel.Width = 800;
        gamePanel.Height = 600;
        gamePanel.Controls.Add(test); 
    }
}