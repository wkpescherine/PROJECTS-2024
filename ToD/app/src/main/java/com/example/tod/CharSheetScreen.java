package com.example.tod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;

public class CharSheetScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_char_sheet_screen);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    public void returnGameScreen(View v){
        Intent intent = new Intent(this, GameScreen.class);
        startActivity(intent);
    }

    public void charGearSwitch(View v){
        Button switcher = findViewById(R.id.CharGear);
        LinearLayout charLayout = findViewById(R.id.charSection);
        LinearLayout gearLayout = findViewById(R.id.gearSection);
        if( charBuilder.charSheetHandler.equals("Char")){
            switcher.setText("Gear");
            charBuilder.charSheetHandler = "Gear";
            charLayout.setVisibility(View.INVISIBLE);
            gearLayout.setVisibility(View.VISIBLE);
        }else {
            switcher.setText("Char");
            charBuilder.charSheetHandler = "Char";
            gearLayout.setVisibility(View.INVISIBLE);
            charLayout.setVisibility(View.VISIBLE);
        }
    }

}