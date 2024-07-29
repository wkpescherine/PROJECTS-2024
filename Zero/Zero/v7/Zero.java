package v7;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.lang.String;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Zero implements ActionListener {
    Config config = new Config();
    Start start = new Start();
    Account account = new Account();
    Browser browser = new Browser();
    About about = new About();

    JFrame window = new JFrame("Zero v7.12.2");

    Zero() {
        // All start screen actions
        start.createAcct.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        start.start.setVisible(false);
                        account.create.setVisible(true);
                    }
                });

        start.startAbout.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        start.start.setVisible(false);
                        account.create.setVisible(false);
                        about.about.setVisible(true);
                    }
                });

        start.updateSys.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        update();
                    }
                });

        start.logIn.addActionListener(this);
        // End of all start screen actions

        // Account section starts here
        account.back.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        exit();
                    }
                });

        account.newAccount.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        account.checkStatus();
                        if (account.checkValue < 1) {
                            browser.browser.setVisible(true);
                        }
                    }
                });
        // End of account section

        // start of about section
        about.aboutBack.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        about.about.setVisible(false);
                        start.start.setVisible(true);
                    }
                });
        // End ofabout sectiom=n

        // Start of main section
        browser.searchBtn.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        browser.mail.mail.setVisible(false);
                        browser.chat.chat.setVisible(false);
                        browser.site.site.setVisible(true);
                        browser.home.home.setVisible(false);
                        browser.about2.about2.setVisible(false);
                        browser.history.history.setVisible(false);
                        browser.settings.setting.setVisible(false);
                    }
                });

        browser.closeBtn.addActionListener(
                new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        exit();
                    }
                });
        // End of main section

        // setting bounds for each screen
        start.start.setBounds(0, 0, Config.width, Config.height);
        browser.browser.setBounds(0, 0, Config.width, Config.height);
        about.about.setBounds(0, 0, Config.width, Config.height);
        account.create.setBounds(0, 0, Config.width, Config.height);
        // end of setting bound section

        window.add(start.start);
        window.add(browser.browser);
        window.add(account.create);
        window.add(about.about);
        window.setLayout(null);
        window.getContentPane().setBackground(Color.BLACK);
        window.setSize(Config.width, Config.height);
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setVisible(true);
        window.setResizable(false);
    }

    public static void main(String args[]) throws Exception {
        Zero zero = new Zero();
        // Attempting to read from file in:
        // C:\Users\wkpes\Desktop\PROJECTS-2024\accountDB.txt
        // File myFile = new File("accountDB.txt");
        // System.out.println("Attempting to read from file in: " +
        // myFile.getCanonicalPath());
    }

    public void actionPerformed(ActionEvent e) {
        String usernameEntered = start.startEditUsername.getText();
        String passwordEntered = start.startEditPassword.getText();
        String[] checklogin;
        Config.username = usernameEntered;

        try {
            // C:\Users\wkpes\Desktop\PROJECTS-2024\Zero\Zero\v7\DB_Files\accountDB.txt
            // File myFile = new File("accountDB.txt");
            // This will work as a tempoirary solution for now
            // File myFile = new
            // File("C:\Users\wkpes\Desktop\PROJECTS-2024\Zero\Zero\v7\DB_Files\accountDB.txt");
            File myFile = new File("C:/Users/wkpes/Desktop/PROJECTS-2024/Zero/Zero/v7/DB_Files/accountDB.txt");
            // System.out.println("Attempting to read from file in: " +
            // myFile.getCanonicalPath());
            Scanner myReader = new Scanner(myFile);
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                checklogin = data.split(",");
                if (passwordEntered.equals(checklogin[1]) && usernameEntered.equals(checklogin[0])) {
                    start.startEditPassword.setText("");
                    start.startEditUsername.setText("");
                    start.errorMessage.setText("");
                    config.getTempId();
                    config.getDate();
                    Config.username = usernameEntered;
                    start.start.setVisible(false);
                    account.create.setVisible(false);
                    browser.browser.setVisible(true);
                    start.errorMessage.setText("You have entered correct information");
                } else {
                    start.startEditPassword.setText("");
                    start.startEditUsername.setText("");
                    start.errorMessage.setText("You have entered incorrect information???");
                }
            }
            myReader.close();
        } catch (FileNotFoundException ioe) {
            ioe.printStackTrace();
        }
    }

    public void exit() {
        browser.browser.setVisible(false);
        start.start.setVisible(true);
    }

    public void update() {
        System.out.println("This is where we will have system updates");
        System.out.println("Eventually will add in the logic to update");
        System.out.println("At moment this is just placeholder");
    }
}