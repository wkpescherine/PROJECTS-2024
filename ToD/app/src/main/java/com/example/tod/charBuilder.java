package com.example.tod;

import java.util.Random;

public class charBuilder {
    public static int [] charStats = {0,0,0,0,0,0,0,0};
    public static int [] charBonus = {0,0,0,0,0,0,0,0};
    public static String race = "None";
    public static String charName = "None";
    public static String classPicked = "None";
    public static String charSheetHandler = "Char";

    public static void rollStats(){
        Random rnd = new Random();
        for(int a = 0; a<= 5; a++){
            int intRnd = rnd.nextInt(20);
            charStats[a] = intRnd+1;
        }
        bonusBuilder();
    }

    public static void bonusBuilder(){
        for(int b = 0; b <= 5; b++){
            int bonusValue = 0;
            int bonusTotal = 0;
            for( int c = 1; c < 99 ; c++){
                bonusTotal += c;
                if(bonusTotal <= charStats[b]){
                    bonusValue = c;
                } else{
                    c = 100;
                    charBonus[b] = bonusValue;
                }
            }
        }
    }
}