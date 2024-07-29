package v7;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Browser implements ActionListener {
	Mail mail = new Mail();
	Chat chat = new Chat();
	Site site = new Site();
	Settings settings = new Settings();
	About2 about2 = new About2();
	Home home = new Home();
	History history = new History();

	JPanel browser = new JPanel();
	JPanel sidebar = new JPanel();
	JPanel display = new JPanel();
	JButton closeBtn = new JButton("Exit");
	JButton mailBtn = new JButton("Mail");
	JButton homeBtn = new JButton("Home");
	JButton settingsBtn = new JButton("Setting");
	JButton chatBtn = new JButton("Chat");
	JButton about2Btn = new JButton("About");
	JButton searchBtn = new JButton("search");
	JButton historyBtn = new JButton("History");
	// JButton blankBtn = new JButton("");
	JTextField search = new JTextField(750);

	Browser() {
		browser.setLayout(null);
		browser.setBackground(Color.BLACK);
		browser.setPreferredSize(new Dimension(1050, 680));
		display.setLayout(null);
		display.setPreferredSize(new Dimension(930, 660));
		display.setBounds(100, 10, 930, 660);
		display.setBackground(Color.BLACK);
		sidebar.setPreferredSize(new Dimension(80, 640));
		sidebar.setBounds(10, 10, 80, 640);
		closeBtn.setPreferredSize(new Dimension(60, 60));
		closeBtn.setFont(new Font("Serif", Font.PLAIN, 12));
		historyBtn.setPreferredSize(new Dimension(60, 60));
		historyBtn.setFont(new Font("Serif", Font.PLAIN, 12));
		mailBtn.setPreferredSize(new Dimension(60, 60));
		mailBtn.setFont(new Font("Serif", Font.PLAIN, 12));
		about2Btn.setPreferredSize(new Dimension(60, 60));
		about2Btn.setFont(new Font("Serif", Font.PLAIN, 12));
		// search.setHorizontalAlignment(SwingConstants.CENTER);
		search.setPreferredSize(new Dimension(750, 20));
		search.setBounds(10, 0, 760, 20);
		searchBtn.setPreferredSize(new Dimension(90, 20));
		searchBtn.setBounds(780, 0, 90, 20);
		searchBtn.setFont(new Font("Serif", Font.PLAIN, 12));
		// blankBtn.setPreferredSize(new Dimension(60, 60));
		homeBtn.setPreferredSize(new Dimension(60, 60));
		chatBtn.setPreferredSize(new Dimension(60, 60));
		settingsBtn.setPreferredSize(new Dimension(60, 60));

		// home.home.setPreferredSize(new Dimension());
		home.home.setBounds(10, 40, 900, 600);
		chat.chat.setBounds(10, 40, 900, 600);
		mail.mail.setBounds(10, 40, 900, 600);
		site.site.setBounds(10, 40, 900, 600);
		about2.about2.setBounds(10, 40, 900, 600);
		history.history.setBounds(10, 40, 900, 600);
		settings.setting.setBounds(10, 40, 900, 600);

		// bank.addActionListener(this);

		homeBtn.addActionListener(this);

		chatBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						clearViews();
						chat.chat.setVisible(true);
					}
				});

		mailBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						clearViews();
						mail.mail.setVisible(true);
					}
				});

		historyBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						clearViews();
						history.history.setVisible(true);
					}
				});

		settingsBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						System.out.println(Config.username);
						settings.settingConfigs();
						clearViews();
						settings.setting.setVisible(true);
					}
				});

		about2.about2Back.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						clearViews();
						about2.about2.setVisible(true);
					}
				});

		searchBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						String siteName = search.getText();
						history.historyArray[history.historyCount] = siteName;
						history.historyCount += 1;
						clearViews();
						site.site.setVisible(true);
						String zsite = search.getText();
						Config.requestedSite = zsite;
					}
				});

		// Set the bounds of each component
		// startUsername.setBounds(left to right, top to bottom, width, height);

		sidebar.add(homeBtn);
		sidebar.add(mailBtn);
		sidebar.add(chatBtn);
		sidebar.add(about2Btn);
		sidebar.add(settingsBtn);
		sidebar.add(closeBtn);
		sidebar.add(historyBtn);
		// sidebar.add(blankBtn);
		display.add(search);
		display.add(searchBtn);
		display.add(mail.mail);
		display.add(site.site);
		display.add(chat.chat);
		display.add(about2.about2);
		display.add(settings.setting);
		display.add(home.home);
		display.add(history.history);
		browser.add(sidebar);
		browser.add(display);
		browser.setVisible(false);
	}

	public void actionPerformed(ActionEvent e) {
		clearViews();
		home.home.setVisible(true);
	}

	public void clearViews() {
		mail.mail.setVisible(false);
		site.site.setVisible(false);
		chat.chat.setVisible(false);
		home.home.setVisible(true);
		about2.about2.setVisible(false);
		settings.setting.setVisible(false);
		history.history.setVisible(false);
	}
}