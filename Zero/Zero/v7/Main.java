import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Main implements ActionListener {
	Mail mailView = new Mail();
	Chat chatView = new Chat();
	Site siteView = new Site();
	Settings settings = new Settings();
	About2 about2 = new About2();
	Home home = new Home();
	History history = new History();

	JPanel main = new JPanel();
	JPanel sidebar = new JPanel();
	JPanel display = new JPanel();
	JButton close = new JButton("Exit");
	JButton mail = new JButton("Mail");
	JButton home = new JButton("Home");
	JButton bank = new JButton("Bank");
	JButton retail = new JButton("Retail");
	JButton settings = new JButton("Setting");
	JButton chat = new JButton("Chat");
	JButton about2 = new JButton("About");
	JButton searchBtn = new JButton("search");
	JButton history = new JButton("History");
	JButton blank = new JButton("");
	JTextField search = new JTextField(75);

	Main() {
		main.setLayout(new FlowLayout());
		main.setBackground(Color.RED);
		main.setPreferredSize(new Dimension(1040, 670));
		display.setLayout(new FlowLayout());
		display.setPreferredSize(new Dimension(930, 660));
		display.setBackground(Color.BLACK);
		sidebar.setPreferredSize(new Dimension(80, 660));
		close.setPreferredSize(new Dimension(60, 60));
		close.setFont(new Font("Serif", Font.PLAIN, 12));
		history.setPreferredSize(new Dimension(60, 60));
		history.setFont(new Font("Serif", Font.PLAIN, 12));
		mail.setPreferredSize(new Dimension(60, 60));
		mail.setFont(new Font("Serif", Font.PLAIN, 12));
		about2.setPreferredSize(new Dimension(60, 60));
		about2.setFont(new Font("Serif", Font.PLAIN, 12));
		search.setHorizontalAlignment(SwingConstants.CENTER);
		searchBtn.setPreferredSize(new Dimension(90, 20));
		searchBtn.setFont(new Font("Serif", Font.PLAIN, 12));
		blank.setPreferredSize(new Dimension(60, 60));
		home.setPreferredSize(new Dimension(60, 60));
		chat.setPreferredSize(new Dimension(60, 60));
		settings.setPreferredSize(new Dimension(60, 60));

		// bank.addActionListener(this);

		home.addActionListener(this);

		history.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						mailView.mail.setVisible(false);
						siteView.site.setVisible(false);
						chatView.chat.setVisible(false);
						bankView.bank.setVisible(false);
						homeView.home.setVisible(false);
						retailView.retail.setVisible(false);
						about2View.about2.setVisible(false);
						settingView.setting.setVisible(false);
						historyView.history.setVisible(true);
					}
				});

		settings.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						System.out.println(Config.username);
						settingView.settingConfigs();
						mailView.mail.setVisible(false);
						siteView.site.setVisible(false);
						chatView.chat.setVisible(false);
						bankView.bank.setVisible(false);
						homeView.home.setVisible(false);
						retailView.retail.setVisible(false);
						about2View.about2.setVisible(false);
						settingView.setting.setVisible(true);
						historyView.history.setVisible(false);
					}
				});

		about2.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						mailView.mail.setVisible(false);
						siteView.site.setVisible(false);
						chatView.chat.setVisible(false);
						bankView.bank.setVisible(false);
						homeView.home.setVisible(false);
						about2View.about2.setVisible(true);
						retailView.retail.setVisible(false);
						settingView.setting.setVisible(false);
						historyView.history.setVisible(false);
					}
				});

		searchBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						String siteName = search.getText();
						historyView.historyArray[historyView.historyCount] = siteName;
						historyView.historyCount += 1;
						mailView.mail.setVisible(false);
						siteView.site.setVisible(true);
						chatView.chat.setVisible(false);
						bankView.bank.setVisible(false);
						homeView.home.setVisible(false);
						about2View.about2.setVisible(false);
						retailView.retail.setVisible(false);
						settingView.setting.setVisible(false);
						historyView.history.setVisible(false);
						String zsite = search.getText();
						Config.requestedSite = zsite;
					}
				});

		sidebar.add(home);
		sidebar.add(mail);
		sidebar.add(chat);
		sidebar.add(about2);
		sidebar.add(settings);
		sidebar.add(close);
		sidebar.add(history);
		sidebar.add(blank);
		display.add(search);
		display.add(searchBtn);
		display.add(mailView.mail);
		display.add(siteView.site);
		display.add(chatView.chat);
		display.add(about2View.about2);
		display.add(settingView.setting);
		display.add(homeView.home);
		display.add(historyView.history);
		main.add(sidebar);
		main.add(display);
		main.setVisible(false);
	}

	public void actionPerformed(ActionEvent e) {
		mail.mail.setVisible(false);
		site.site.setVisible(false);
		chat.chat.setVisible(false);
		home.home.setVisible(true);
		about2.about2.setVisible(false);
		setting.setting.setVisible(false);
		history.history.setVisible(false);
	}
}