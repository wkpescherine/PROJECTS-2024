package v7;

import java.awt.*;
//import java.awt.event.*;
//import javax.swing.*;
//import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class About {
    JPanel about = new JPanel();
    // JPanel aboutSubSec = new JPanel();
    JLabel aboutText = new JLabel("None");
    JButton aboutBack = new JButton("Back");

    About() {
        about.setLayout(null);
        about.setBackground(Color.BLACK);
        aboutText.setForeground(Color.WHITE);
        about.setPreferredSize(new Dimension(Config.width, Config.height));
        // aboutSubSec.setPreferredSize(new Dimension(480, 300));
        aboutText.setText("This is a new browser that does not use currrent web technologies");
        aboutText.setBounds(375, 50, 300, 300);
        aboutBack.setBounds(500, 320, 100, 60);
        aboutBack.setPreferredSize(new Dimension(80, 60));
        about.add(aboutText);
        about.add(aboutBack);
        about.setVisible(false);
    }
}
