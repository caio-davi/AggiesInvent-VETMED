package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private String DENNIS_USERNAME = "helenajones";
    private String DENNIS_PASSWORD = "helena123";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getSupportActionBar().hide();
    }

    public void onLoginClick(View view) {
        EditText edTxtUsername = findViewById(R.id.editTextUsername);
        EditText edTxtPass = findViewById(R.id.editTextPassword);

        if (edTxtUsername.getText().toString().equals(DENNIS_USERNAME) && edTxtPass.getText().toString().equals(DENNIS_PASSWORD)) {
            view.startAnimation(AnimationUtils.loadAnimation(this, R.anim.image_click));
            Intent intent = new Intent(this, PetActivity.class);
            startActivity(intent);
        } else {
            new AlertDialog.Builder(this)
                    .setTitle("Login Failed")
                    .setMessage("Make sure your username and password are correct")

                    // Specifying a listener allows you to take an action before dismissing the dialog.
                    // The dialog is automatically dismissed when a dialog button is clicked.
                    .setPositiveButton(android.R.string.yes, null)
                    .setIcon(android.R.drawable.ic_dialog_alert)
                    .show();
        }
    }
}