package v7;

import java.awt.*;
//import java.awt.event.*;
//import javax.swing.*;
import javax.swing.BoxLayout;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class About2 {
    JPanel about2 = new JPanel();
    JLabel about2Text = new JLabel("none");

    About2() {
        about2.setAlignmentX(0.0F);
        about2.setMaximumSize(new java.awt.Dimension(32767, 33));
        about2.setLayout(new BoxLayout(about2, BoxLayout.X_AXIS));
        about2.setPreferredSize(new Dimension(500, 560));
        about2Text.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        about2Text.setVerticalTextPosition(javax.swing.SwingConstants.TOP);
        about2.add(about2Text);
        about2Text.setText("Introducing a new web browser");
        about2.setVisible(false);
    }
}
