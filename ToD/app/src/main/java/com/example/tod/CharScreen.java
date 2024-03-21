package com.example.tod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class CharScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_char_screen);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        updateStatsPanel();
    }

    public void beginGame(View v){
        Intent intent = new Intent(this, GameScreen.class);
        startActivity(intent);
    }

    public void approveChar(){
        if(charBuilder.race.equals("None")){
            Toast.makeText(this, "No Race Selected", Toast.LENGTH_SHORT).show();
        }else {
            Toast.makeText(this, "Char saved, this is temp", Toast.LENGTH_SHORT).show();
        }
    }

    public void buildStats(View v){
        if(charBuilder.race.equals("None")){
            Toast.makeText(this, "No Race Selected", Toast.LENGTH_SHORT).show();
        }else {
            if(charBuilder.classPicked.equals("None")){
                charBuilder.rollStats();
                updateStatsPanel();
            }
        }
        checkClass();
    }

    public void setRace(View v){
        TextView t = (TextView) v;
        String selectRace = t.getText().toString();
        charBuilder.race = selectRace;
        updateStatsPanel();
    }

    public void setClass(View v){
        TextView t = (TextView) v;
        String selectClass = t.getText().toString();
        charBuilder.classPicked = selectClass;
        updateStatsPanel();
    }

    public void checkClass(){
        TextView war = findViewById(R.id.Warrior);
        TextView pri = findViewById(R.id.Priest);
        TextView mag = findViewById(R.id.Mage);
        TextView pal = findViewById(R.id.Paladin);
        TextView cle = findViewById(R.id.Cleric);
        TextView wiz = findViewById(R.id.Wizard);
        TextView rav = findViewById(R.id.Ravager);
        TextView ave = findViewById(R.id.Avenger);
        TextView arc = findViewById(R.id.Archmage);
        war.setVisibility(View.INVISIBLE);
        pri.setVisibility(View.INVISIBLE);
        mag.setVisibility(View.INVISIBLE);
        pal.setVisibility(View.INVISIBLE);
        cle.setVisibility(View.INVISIBLE);
        wiz.setVisibility(View.INVISIBLE);
        rav.setVisibility(View.INVISIBLE);
        ave.setVisibility(View.INVISIBLE);
        arc.setVisibility(View.INVISIBLE);
        if(charBuilder.charStats[0] >= 9){ war.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[4] >= 9){ pri.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[3] >= 9){ mag.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[0] >= 12 && charBuilder.charStats[4] >= 12){ pal.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[4] >= 14){ cle.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[3] >= 14){ wiz.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[0] >= 20){ rav.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[4] >= 15 && charBuilder.charStats[0] >= 15){ ave.setVisibility(View.VISIBLE);}
        if(charBuilder.charStats[3] == 20){ arc.setVisibility(View.VISIBLE);}
    }

    public void updateStatsPanel(){
        TextView ss = findViewById(R.id.statStr);
        TextView sc = findViewById(R.id.statCon);
        TextView sd = findViewById(R.id.statDex);
        TextView si = findViewById(R.id.statInt);
        TextView sw = findViewById(R.id.statWis);
        TextView sq = findViewById(R.id.statQui);
        TextView sl = findViewById(R.id.statLife);
        TextView sm = findViewById(R.id.statMana);
        TextView rp =findViewById(R.id.racePicked);
        TextView cp = findViewById(R.id.classPicked);
        ss.setText("Str: "+ charBuilder.charStats[0] + " +" +charBuilder.charBonus[0]);
        sc.setText("Con: "+ charBuilder.charStats[1] + " +" +charBuilder.charBonus[1]);
        sd.setText("Dex: "+ charBuilder.charStats[2] + " +" +charBuilder.charBonus[2]);
        si.setText("Int: "+ charBuilder.charStats[3] + " +" +charBuilder.charBonus[3]);
        sw.setText("Wis: "+ charBuilder.charStats[4] + " +" +charBuilder.charBonus[4]);
        sq.setText("Qui: "+ charBuilder.charStats[5] + " +" +charBuilder.charBonus[5]);
        sl.setText("Life: "+ charBuilder.charStats[6]);
        sm.setText("Mana: "+ charBuilder.charStats[7]);
        rp.setText(charBuilder.race);
        cp.setText(charBuilder.classPicked);
    }

    public void saveData(View v){
        EditText cName = findViewById(R.id.charName);
        String cNameStr = "None";
        cNameStr = cName.getText().toString();
        if(cNameStr.equals("None")){
            Toast.makeText(this, "Enter a Name to continue", Toast.LENGTH_SHORT).show();
        }else if(charBuilder.classPicked.equals("None")){
            Toast.makeText(this, "Select a Class to continue", Toast.LENGTH_SHORT).show();
        }else{
            String filename = "TOD";
            SharedPreferences spCS = getSharedPreferences(filename,MODE_PRIVATE);
            SharedPreferences.Editor editorCS = spCS.edit();
            editorCS.putString("charSlot1", cNameStr +":"+ charBuilder.race);
            editorCS.commit();
            charBuilder.race = "None";
            charBuilder.classPicked ="None";
            int [] reset = {0,0,0,0,0,0,0,0};
            int [] reset2 = {0,0,0,0,0,0};
            charBuilder.charStats = reset;
            charBuilder.charBonus = reset2;
            updateStatsPanel();
        }
    }
}