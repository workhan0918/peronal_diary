package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Tags {
    @JsonProperty
    private int tId;
    @JsonProperty
    private String tagName;
}
