package com.tw.diary.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class SharedDiary {
    @JsonProperty
    private int sdId;
    @JsonProperty
    private int dId;
    @JsonProperty
    private String allowedUserId;
}
