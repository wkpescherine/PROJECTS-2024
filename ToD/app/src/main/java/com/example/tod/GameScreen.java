package com.example.tod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

public class GameScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game_screen);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }

    public void returnToCharScreen(View v){
        Intent intent = new Intent(this, CharScreen.class);
        startActivity(intent);
    }

    public void toCharSheetScreen(View v){
        Intent intent = new Intent(this, CharSheetScreen.class);
        startActivity(intent);
    }
}