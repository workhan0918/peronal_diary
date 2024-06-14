package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class DiaryTags {
    @JsonProperty
    private int tId;
    @JsonProperty
    private String tagName;
}
