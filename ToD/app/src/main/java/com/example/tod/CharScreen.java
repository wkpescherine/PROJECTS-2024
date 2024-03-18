package com.example.tod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
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
            charBuilder.rollStats();
            updateStatsPanel();
        }
    }

    public void setRace(View v){
        TextView t = (TextView) v;
        String selectRace = t.getText().toString();
        charBuilder.race = selectRace;
    }

    public void setClass(View v){
        TextView t = (TextView) v;
        String selectClass = t.getText().toString();
        charBuilder.classPicked = selectClass;
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
        ss.setText("Str: "+ charBuilder.charStats[0]);
        sc.setText("Con: "+ charBuilder.charStats[1]);
        sd.setText("Dex: "+ charBuilder.charStats[2]);
        si.setText("Int: "+ charBuilder.charStats[3]);
        sw.setText("Wis: "+ charBuilder.charStats[4]);
        sq.setText("Qui: "+ charBuilder.charStats[5]);
        sl.setText("Life: "+ charBuilder.charStats[6]);
        sm.setText("Mana: "+ charBuilder.charStats[7]);
        rp.setText(charBuilder.race);
        cp.setText(charBuilder.classPicked);
    }
}