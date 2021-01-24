package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MedicalActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_medical);

        getSupportActionBar().hide();
    }

    public void onSkinEarsClick(View view) {
        Intent intent = new Intent(this, SkinEarsActivity.class);
        startActivity(intent);
    }

    public void onUrinaryClick(View view) {
        Intent intent = new Intent(this, UrinaryActivity.class);
        startActivity(intent);
    }
}