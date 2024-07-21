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
    Main main = new Main();
    About about = new About();

    JFrame window = new JFrame("Zero v7.5.1");

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
                        about.aboutSec.setVisible(true);
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

        // setting bounds for each screen
        start.start.setBounds(0, 0, Config.width, Config.height);
        // end of setting bound section

        window.add(start.start);
        window.setLayout(null);
        window.getContentPane().setBackground(Color.BLACK);
        window.setSize(Config.width, Config.height);
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setVisible(true);
        window.setResizable(false);
    }

    public static void main(String args[]) {
        Zero zero = new Zero();
    }

    public void actionPerformed(ActionEvent e) {
        String usernameEntered = startView.startEditUsername.getText();
        String passwordEntered = startView.startEditPassword.getText();
        String[] checklogin;
        Config.username = usernameEntered;

        try {
            File myFile = new File("accountDB.txt");
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
                    main.main.setVisible(true);
                } else {
                    start.startEditPassword.setText("");
                    start.startEditUsername.setText("");
                    start.errorMessage.setText("You have entered incorrect information");
                }
            }
            myReader.close();
        } catch (FileNotFoundException ioe) {
            ioe.printStackTrace();
        }
    }

    public void exit() {
        main.main.setVisible(false);
        start.start.setVisible(true);
    }

    public void update() {
        System.out.println("This is where we will have system updates");
        System.out.println("Eventually will add in the logic to update");
        System.out.println("At moment this is just placeholder");
    }
}