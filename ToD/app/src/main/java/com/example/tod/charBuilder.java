package com.example.tod;

import java.util.Random;

public class charBuilder {
    public static int [] charStats= {0,0,0,0,0,0,0,0};
    public static String race = "None";
    public static String charName = "None";

    public static void rollStats(){
        Random rnd = new Random();
        for(int a = 0; a<= 5; a++){
            int intRnd = rnd.nextInt(20);
            charStats[a] = intRnd+1;
        }
    }
}
