package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class CareActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_care);

        getSupportActionBar().hide();
    }

    public void onHygieneClick(View view) {
        Intent intent = new Intent(this, HygieneActivity.class);
        startActivity(intent);
    }

    public void onFoodClick(View view) {
        Intent intent = new Intent(this, FoodActivity.class);
        startActivity(intent);
    }

    public void onMedicationsClick(View view) {
        Intent intent = new Intent(this, MedicationsActivity.class);
        startActivity(intent);
    }
}