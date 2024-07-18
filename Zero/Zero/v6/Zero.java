import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.lang.String;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Zero implements ActionListener {
	Config config = new Config();

	AboutView aboutView = new AboutView();
	StartView startView = new StartView();
	Main main = new Main();
	CreateAccountView accountView = new CreateAccountView();

	JFrame window = new JFrame("Zero v6.3");

	Zero() {
		startView.createAcct.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						startView.start.setVisible(false);
						accountView.create.setVisible(true);
					}
				});

		startView.startAbout.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						startView.start.setVisible(false);
						accountView.create.setVisible(false);
						aboutView.aboutSec.setVisible(true);
					}
				});

		startView.updateSys.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						update();
					}
				});

		startView.logIn.addActionListener(this);

		accountView.back.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						exit();
					}
				});

		accountView.newAccount.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						accountView.checkStatus();
						if (accountView.checkValue < 1) {
							main.main.setVisible(true);
						}
					}
				});

		aboutView.aboutBack.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						aboutView.aboutSec.setVisible(false);
						startView.start.setVisible(true);
					}
				});

		main.searchBtn.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						main.mailView.mail.setVisible(false);
						main.chatView.chat.setVisible(false);
						main.siteView.site.setVisible(true);
						main.homeView.home.setVisible(false);
						main.about2View.about2.setVisible(false);
						main.historyView.history.setVisible(false);
						main.settingView.setting.setVisible(false);
						main.bankView.bank.setVisible(false);
					}
				});

		main.close.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						exit();
					}
				});

		main.mail.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						main.mailView.mail.setVisible(true);
						main.chatView.chat.setVisible(false);
						main.siteView.site.setVisible(false);
						main.homeView.home.setVisible(false);
						main.about2View.about2.setVisible(false);
						main.historyView.history.setVisible(false);
						main.settingView.setting.setVisible(false);
						main.bankView.bank.setVisible(false);
					}
				});

		main.chat.addActionListener(
				new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						main.mailView.mail.setVisible(false);
						main.chatView.chat.setVisible(true);
						main.siteView.site.setVisible(false);
						main.homeView.home.setVisible(false);
						main.about2View.about2.setVisible(false);
						main.historyView.history.setVisible(false);
						main.settingView.setting.setVisible(false);
						main.bankView.bank.setVisible(false);
					}
				});

		window.add(startView.start);
		window.add(main.main);
		window.add(accountView.create);
		window.add(aboutView.aboutSec);
		window.setLayout(new FlowLayout());
		window.getContentPane().setBackground(Color.BLACK);
		window.setSize(1050, 700);// increase 150x100 so can increase thru-out
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
					startView.startEditPassword.setText("");
					startView.startEditUsername.setText("");
					startView.errorMessage.setText("");
					config.getTempId();
					config.getDate();
					Config.username = usernameEntered;
					startView.start.setVisible(false);
					accountView.create.setVisible(false);
					mainView.main.setVisible(true);
				} else {
					startView.startEditPassword.setText("");
					startView.startEditUsername.setText("");
					startView.errorMessage.setText("You have entered incorrect information");
				}
			}
			myReader.close();
		} catch (FileNotFoundException ioe) {
			ioe.printStackTrace();
		}
	}

	public void exit() {
		mainView.main.setVisible(false);
		startView.start.setVisible(true);
	}

	public void update() {
		System.out.println("This is where we will have system updates");
		System.out.println("Eventually will add in the logic to update");
		System.out.println("At moment this is just placeholder");
	}
}// 190