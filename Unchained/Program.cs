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

            //Style handling section
            Label styleHeader = new();
            styleHeader.Text = "Select your Style";
            styleHeader.ForeColor = Color.FromArgb(255, 255, 255);
            styleHeader.Location = new Point(25,25);
            Panel spacer1 = new();
            spacer1.Width = 350;
            spacer1.Height = 3;
            spacer1.Location = new Point(25, 55);
            spacer1.BackColor = Color.FromArgb(255, 255, 255);
            Button holy = new();
            holy.Text = "Holy";
            holy.Location = new Point(25, 80);
            holy.BackColor = Color.FromArgb(255, 255, 255);
            Button wise = new();
            wise.Text = "Wise";
            wise.Location = new Point(25, 110);
            wise.BackColor = Color.FromArgb(255, 255, 255);
            Button psychtic = new();
            psychtic.Text = "Psychtic";
            psychtic.Location = new Point(25, 140);
            psychtic.BackColor = Color.FromArgb(255, 255, 255);
            Button stout = new();
            stout.Text = "Stout";
            stout.Location = new Point(125, 80);
            stout.BackColor = Color.FromArgb(255, 255, 255);
            Button veteran = new();
            veteran.Text = "Veteran";
            veteran.Location = new Point(125, 110);
            veteran.BackColor = Color.FromArgb(255, 255, 255);
            Button brutal = new();
            brutal.Text = "Brutal";
            brutal.Location = new Point(125, 140);
            brutal.BackColor = Color.FromArgb(255, 255, 255);
            Button nimble = new();
            nimble.Text = "Nimble";
            nimble.Location = new Point(225, 80);
            nimble.BackColor = Color.FromArgb(255, 255, 255);
            Button balanced = new();
            balanced.Text = "Balanced";
            balanced.Location = new Point(225, 110);
            balanced.BackColor = Color.FromArgb(255, 255, 255);
            Button speedy = new();
            speedy.Text = "Speedy";
            speedy.Location = new Point(225, 140);
            speedy.BackColor = Color.FromArgb(255, 255, 255);
            //Race handling section
            Label raceHeader = new();
            raceHeader.Text = "Select your Race";
            raceHeader.ForeColor = Color.FromArgb(255, 255, 255);
            raceHeader.Location = new Point(25,190);
            Panel spacer2 = new();
            spacer2.Width = 350;
            spacer2.Height = 3;
            spacer2.Location = new Point(25, 220);
            spacer2.BackColor = Color.FromArgb(255, 255, 255);
            Button human = new();
            human.Text = "Human";
            human.Location = new Point(25, 245);
            human.BackColor = Color.FromArgb(255, 255, 255);
            Button dwarf = new();
            dwarf.Text = "Dwarven";
            dwarf.Location = new Point(125, 245);
            dwarf.BackColor = Color.FromArgb(255, 255, 255);
            //Role handling section
            Button paladin = new();
            paladin.Text = "Paladin";
            paladin.Location = new Point(25, 420);
            paladin.BackColor = Color.FromArgb(255, 255, 255);
            //Results section
            Label selectStyle = new();
            selectStyle.Text = charSheet.style;
            selectStyle.Location = new Point(25, 520);
            selectStyle.ForeColor = Color.FromArgb(255, 255, 255);
            Label selectRace = new();
            selectRace.Text = charSheet.style;
            selectRace.Location = new Point(125, 520);
            selectRace.ForeColor = Color.FromArgb(255, 255, 255);
            //Event handling section
            holy.Click += (sender, e) => styleSelect(sender, e);
            wise.Click += (sender, e) => styleSelect(sender, e);
            psychtic.Click += (sender, e) => styleSelect(sender, e);
            stout.Click += (sender, e) => styleSelect(sender, e);
            veteran.Click += (sender, e) => styleSelect(sender, e);
            brutal.Click += (sender, e) => styleSelect(sender, e);
            nimble.Click += (Sender, e) => styleSelect(Sender,e);
            balanced.Click += (Sender, e) => styleSelect(Sender,e);
            speedy.Click += (Sender, e) => styleSelect(Sender,e);
            balanced.Click += (Sender, e) => styleSelect(Sender,e);
            speedy.Click += (Sender, e) => styleSelect(Sender,e);
            human.Click += (Sender, e) => raceSelect(Sender,e);
            dwarf.Click += (Sender, e) => raceSelect(Sender,e);
            paladin.Click += (Sender, e) => roleSelect(Sender,e);
            //UI section
            select.Width = 800;
            select.Height = 600;
            select.Visible = false;
            select.Controls.Add(styleHeader);
            select.Controls.Add(spacer1);
            select.Controls.Add(holy);
            select.Controls.Add(wise);
            select.Controls.Add(psychtic);
            select.Controls.Add(stout);
            select.Controls.Add(veteran);
            select.Controls.Add(brutal);
            select.Controls.Add(nimble);
            select.Controls.Add(balanced);
            select.Controls.Add(speedy);
            select.Controls.Add(raceHeader);
            select.Controls.Add(spacer2);            
            select.Controls.Add(human);
            select.Controls.Add(dwarf);
            select.Controls.Add(paladin);
            select.Controls.Add(selectExit);
            select.Controls.Add(selectStyle);
            select.Controls.Add(selectRace);
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
            window.Text = "Unchained v0.2.8.2";
            //window.BackColor = Color.FromArgb(0, 0, 0);
            //window.Controls.Add(button);
            window.Controls.Add(main);
            window.Controls.Add(select);
            window.Controls.Add(saved);
            Application.Run(window);

            void styleSelect(object ? sender, EventArgs e){
                Button btn = sender as Button;
                string s = btn.Text;
                charSheet.style = s;
                selectStyle.Text = charSheet.style;
            }

            void raceSelect(object ? sender, EventArgs e){
                Button btn2 = sender as Button;
                string r = btn2.Text;
                charSheet.race = r;
                selectRace.Text = charSheet.race;
            }
            
            void roleSelect(object ? sender, EventArgs e){
                Button btn2 = sender as Button;
                string r = btn2.Text;
                charSheet.race = r;
                selectRace.Text = charSheet.race;
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