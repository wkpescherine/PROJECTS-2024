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
            Button selectNew = new();
            Button selectExit = new();
            Button savedStart = new();
            Button savedExit = new();

            selectNew.Text = "New Game";
            selectNew.Location = new Point(395, 150);
            selectNew.BackColor = Color.FromArgb(255, 255, 255);
            selectNew.Click += newGame;
            
            selectExit.Text = "Exit Select";
            selectExit.Location = new Point(350, 525);
            selectExit.BackColor = Color.FromArgb(255, 255, 255);
            selectExit.Click += backToMain;

            Button startGame = new();
            startGame.Text = "Start Game";
            startGame.Location = new Point(450, 525);
            startGame.BackColor = Color.FromArgb(255, 255, 255);
            startGame.Click += startNewGame;

            //Char Building components
            Panel charChoices = new();
            charChoices.Location = new Point(0,0);
            charChoices.Width = 400;
            charChoices.Height = 500;
            charChoices.BackColor = Color.FromArgb(0, 0, 0);
            Panel charStats = new();
            charStats.Location = new Point(400,0);
            charStats.Width = 400;
            charStats.Height = 500;
            charStats.BackColor = Color.FromArgb(0, 0, 0);
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
            Button elven = new();
            elven.Text = "Elven";
            elven.Location = new Point(25, 275);
            elven.BackColor = Color.FromArgb(255, 255, 255);
            Button kobold = new();
            kobold.Text = "Kobold";
            kobold.Location = new Point(25, 305);
            kobold.BackColor = Color.FromArgb(255, 255, 255);
            Button dwarf = new();
            dwarf.Text = "Dwarven";
            dwarf.Location = new Point(125, 245);
            dwarf.BackColor = Color.FromArgb(255, 255, 255);
            Button orc = new();
            orc.Text = "Orc";
            orc.Location = new Point(125, 275);
            orc.BackColor = Color.FromArgb(255, 255, 255);
            Button draco = new();
            draco.Text = "Draco";
            draco.Location = new Point(125, 305);
            draco.BackColor = Color.FromArgb(255, 255, 255); 
            Button atlantean = new();
            atlantean.Text = "Atlantean";
            atlantean.Location = new Point(225, 245);
            atlantean.BackColor = Color.FromArgb(255, 255, 255);
            Button undead = new();
            undead.Text = "Undead";
            undead.Location = new Point(225, 275);
            undead.BackColor = Color.FromArgb(255, 255, 255);
            Button grim = new();
            grim.Text = "Grim";
            grim.Location = new Point(225, 305);
            grim.BackColor = Color.FromArgb(255, 255, 255);            
            //Role handling section
            Label roleHeader = new();
            roleHeader.Text = "Select your Role";
            roleHeader.ForeColor = Color.FromArgb(255, 255, 255);
            roleHeader.Location = new Point(25,350);
            Panel spacer3 = new();
            spacer3.Width = 350;
            spacer3.Height = 3;
            spacer3.Location = new Point(25, 380);
            spacer3.BackColor = Color.FromArgb(255, 255, 255);
            Button paladin = new();
            paladin.Text = "Paladin";
            paladin.Location = new Point(25, 400);
            paladin.BackColor = Color.FromArgb(255, 255, 255);
            Button warrior = new();
            warrior.Text = "Warrior";
            warrior.Location = new Point(25, 430);
            warrior.BackColor = Color.FromArgb(255, 255, 255);
            Button ravager = new();
            ravager.Text = "Ravager";
            ravager.Location = new Point(25, 460);
            ravager.BackColor = Color.FromArgb(255, 255, 255);
            Button magi = new();
            magi.Text = "Magi";
            magi.Location = new Point(125, 400);
            magi.BackColor = Color.FromArgb(255, 255, 255);
            Button cleric = new();
            cleric.Text = "Cleric";
            cleric.Location = new Point(125, 430);
            cleric.BackColor = Color.FromArgb(255, 255, 255);
            Button seer = new();
            seer.Text = "Seer";
            seer.Location = new Point(125, 460);
            seer.BackColor = Color.FromArgb(255, 255, 255);
            Button justicar = new();
            justicar.Text = "Justicar";
            justicar.Location = new Point(225, 400);
            justicar.BackColor = Color.FromArgb(255, 255, 255);
            Button ranger = new();
            ranger.Text = "Ranger";
            ranger.Location = new Point(225, 430);
            ranger.BackColor = Color.FromArgb(255, 255, 255);
            Button shadow = new();
            shadow.Text = "Shadow";
            shadow.Location = new Point(225, 460);
            shadow.BackColor = Color.FromArgb(255, 255, 255);
            //Results section
            Label nameString = new();
            nameString.Text = charSheet.charname;
            nameString.Location = new Point( 25, 25);
            nameString.ForeColor = Color.FromArgb(255, 255, 255);
            Label selectStyle = new();
            selectStyle.Text = charSheet.style;
            selectStyle.Location = new Point( 25, 55 );
            selectStyle.ForeColor = Color.FromArgb(255, 255, 255);
            Label selectRace = new();
            selectRace.Text = charSheet.race;
            selectRace.Location = new Point( 125, 55);
            selectRace.ForeColor = Color.FromArgb(255, 255, 255);
            Label selectRole = new();
            selectRole.Text = charSheet.role;
            selectRole.Location = new Point( 225, 55);
            selectRole.ForeColor = Color.FromArgb(255, 255, 255);
            Label lvlString = new();
            lvlString.Text = "lvl: "+charSheet.level;
            lvlString.Location = new Point( 25, 85);
            lvlString.ForeColor = Color.FromArgb(255, 255, 255);
            Label strString = new();
            strString.Text = "Str: "+charSheet.str;
            strString.Location = new Point( 25, 115);
            strString.ForeColor = Color.FromArgb(255, 255, 255);
            Label conString = new();
            conString.Text = "Con: "+charSheet.con;
            conString.Location = new Point( 25, 145);
            conString.ForeColor = Color.FromArgb(255, 255, 255);
            Label dexString = new();
            dexString.Text = "Dex: "+charSheet.str;
            dexString.Location = new Point( 25, 175);
            dexString.ForeColor = Color.FromArgb(255, 255, 255);
            Label quiString = new();
            quiString.Text = "Qui: "+charSheet.str;
            quiString.Location = new Point( 25, 205);
            quiString.ForeColor = Color.FromArgb(255, 255, 255);
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
            elven.Click += (Sender, e) => raceSelect(Sender,e);
            kobold.Click += (Sender, e) => raceSelect(Sender,e);
            dwarf.Click += (Sender, e) => raceSelect(Sender,e);
            orc.Click += (Sender, e) => raceSelect(Sender,e);
            draco.Click += (Sender, e) => raceSelect(Sender,e);
            dwarf.Click += (Sender, e) => raceSelect(Sender,e);
            atlantean.Click += (Sender, e) => raceSelect(Sender,e);
            undead.Click += (Sender, e) => raceSelect(Sender,e);
            grim.Click += (Sender, e) => roleSelect(Sender,e);
            paladin.Click += (Sender, e) => roleSelect(Sender,e);
            warrior.Click += (Sender, e) => roleSelect(Sender,e);
            ravager.Click += (Sender, e) => roleSelect(Sender,e);
            magi.Click += (Sender, e) => roleSelect(Sender,e);
            seer.Click += (Sender, e) => roleSelect(Sender,e);
            cleric.Click += (Sender, e) => roleSelect(Sender,e);
            justicar.Click += (Sender, e) => roleSelect(Sender,e);
            ranger.Click += (Sender, e) => roleSelect(Sender,e);
            shadow.Click += (Sender, e) => roleSelect(Sender,e);
            //UI section
            select.Width = 800;
            select.Height = 600;
            select.Visible = false;
            select.Controls.Add(charChoices);
            select.Controls.Add(charStats);
            charChoices.Controls.Add(styleHeader);
            charChoices.Controls.Add(spacer1);
            charChoices.Controls.Add(holy);
            charChoices.Controls.Add(wise);
            charChoices.Controls.Add(psychtic);
            charChoices.Controls.Add(stout);
            charChoices.Controls.Add(veteran);
            charChoices.Controls.Add(brutal);
            charChoices.Controls.Add(nimble);
            charChoices.Controls.Add(balanced);
            charChoices.Controls.Add(speedy);
            charChoices.Controls.Add(raceHeader);
            charChoices.Controls.Add(spacer2);            
            charChoices.Controls.Add(human);
            charChoices.Controls.Add(elven);
            charChoices.Controls.Add(kobold);
            charChoices.Controls.Add(dwarf);
            charChoices.Controls.Add(orc);
            charChoices.Controls.Add(draco);
            charChoices.Controls.Add(undead);
            charChoices.Controls.Add(atlantean);
            charChoices.Controls.Add(grim);
            charChoices.Controls.Add(roleHeader);
            charChoices.Controls.Add(spacer3); 
            charChoices.Controls.Add(paladin);
            charChoices.Controls.Add(warrior);
            charChoices.Controls.Add(ravager);
            charChoices.Controls.Add(magi);
            charChoices.Controls.Add(seer);
            charChoices.Controls.Add(cleric);
            charChoices.Controls.Add(justicar);
            charChoices.Controls.Add(ranger);
            charChoices.Controls.Add(shadow);
            select.Controls.Add(selectExit);
            select.Controls.Add(startGame);
            charStats.Controls.Add(nameString);            
            charStats.Controls.Add(lvlString);            
            charStats.Controls.Add(selectStyle);
            charStats.Controls.Add(selectRace);
            charStats.Controls.Add(selectRole);
            charStats.Controls.Add(strString);
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
            main.Controls.Add(selectNew);
            main.Controls.Add(savedStart);
            main.BackColor = Color.FromArgb(0, 0, 0);
            
            window.Width = 800;
            window.Height = 600;
            window.Text = "Unchained v0.2.11";
            //window.BackColor = Color.FromArgb(0, 0, 0);
            //window.Controls.Add(button);
            window.Controls.Add(main);
            window.Controls.Add(select);
            window.Controls.Add(saved);
            //window.Controls.Add(gamePanel);
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
                Button btn3 = sender as Button;
                string r2 = btn3.Text;
                charSheet.role = r2;
                selectRole.Text = charSheet.role;
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

            void startNewGame(Object ? sener, EventArgs e){
                select.Visible = false;
                //dungeon.Game().gamePanel.Visible = true;
            }
        }
    }
}