import java.awt.*;
import javax.swing.*;

public class About2 {
    Text text = new Text();

    JPanel about2 = new JPanel();
    JLabel about2Text = new JLabel("none");

    About2() {
        about2.setAlignmentX(0.0F);
        about2.setMaximumSize(new java.awt.Dimension(32767, 33));
        about2.setLayout(new BoxLayout(about2, BoxLayout.X_AXIS));
        about2.setPreferredSize(new Dimension(500, 560));
        about2Text.setVerticalAlignment(javax.swing.SwingConstants.TOP);
        about2Text.setVerticalTextPosition(javax.swing.SwingConstants.TOP);
        about2Back.setBounds(50, 200, 200, 50);
        about2Back.setPreferredSize(new Dimension(80, 60));
        about2.add(about2Text);
        about2Text.setText("<html>" + text.about + "</html>");
        about2.setVisible(false);
    }
}// 20