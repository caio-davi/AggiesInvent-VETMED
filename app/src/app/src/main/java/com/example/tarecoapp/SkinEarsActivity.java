package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class SkinEarsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_skin_ears);

        ListView listView = (ListView) findViewById(R.id.skinEarListview);
        listView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(
                this, R.array.listview_skin_ear,
                android.R.layout.simple_list_item_multiple_choice);

        listView.setAdapter(adapter);
    }
}