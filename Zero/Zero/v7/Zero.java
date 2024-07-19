package v7;

import java.awt.*;
//import java.awt.event.*;
import javax.swing.*;
//import java.lang.String;
//import java.io.File;
//import java.io.FileNotFoundException;
//import java.util.Scanner;

public class Zero {
    Start start = new Start();

    JFrame window = new JFrame("Zero v7.4.1");

    Zero() {
        start.start.setBounds(0, 0, Config.width, Config.height);

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
}
