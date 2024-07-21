package v7;

import java.awt.*;
//import java.awt.event.*;
//import javax.swing.*;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class About {
    JPanel aboutSec = new JPanel();
    JPanel aboutSubSec = new JPanel();
    JLabel aboutText = new JLabel("None");
    JButton aboutBack = new JButton("Back");

    About() {
        aboutSec.setLayout(new BoxLayout(aboutSec, BoxLayout.Y_AXIS));
        aboutSec.setBackground(Color.BLACK);
        aboutText.setForeground(Color.WHITE);
        aboutSec.setPreferredSize(new Dimension(500, 560));
        aboutSubSec.setPreferredSize(new Dimension(480, 300));
        aboutText.setText("This is a new browser that does not use currrent web technologies");
        aboutBack.setBounds(50, 200, 200, 50);
        aboutBack.setPreferredSize(new Dimension(80, 60));
        aboutSec.add(aboutText);
        aboutSec.add(aboutBack);
        aboutSec.setVisible(false);
    }
}
